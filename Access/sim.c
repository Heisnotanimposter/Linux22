#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX_PAGE_NUMBER 1001
#define MAX_FRAMES 1024

typedef struct {
    int page_number;
    bool referenced;
    bool modified;
    int lastUsed;            
} Page;

void simulate(int frames, const char* algorithm);
int findVictimPageFIFO(int frames, int *currentFrame);
int findVictimPageNRU(Page *pageTable, int frames, int currentAccess);
void printResults(int totalAccesses, int totalReads, int totalWrites, int pageFaults);

int main(int argc, char *argv[]) {
    if (argc != 3 || (strcmp(argv[1], "fifo") != 0 && strcmp(argv[1], "nru") != 0)) {
        fprintf(stderr, "Usage: %s [fifo|nru] <num_frames (1-%d)>\n", argv[0], MAX_FRAMES);
        return 1; 
    }

    int frames = atoi(argv[2]);

    if (frames <= 0 || frames > MAX_FRAMES) {
        fprintf(stderr, "Error: Invalid number of frames.\n");
        return 1; 
    }    

    simulate(frames, argv[1]);

    return 0;
}

void simulate(int frames, const char *algorithm) {
    int pageFaults = 0, currentFrame = 0, totalAccesses = 0, totalReads = 0, totalWrites = 0;
    Page *pageTable = calloc(frames, sizeof(Page));
    bool isFIFO = (strcmp(algorithm, "fifo") == 0);
    char lineBuffer[256];
    int page;
    char operation;
    int lineNumber = 1;  

    for (int i = 0; i < frames; i++) {
        pageTable[i].page_number = -1; 
    }

    FILE *fp = fopen("access.list", "r");
    if (!fp) {
        perror("Error opening access.list");
        free(pageTable);
        exit(1); 
    }

    // Read and process page accesses from the file
    while (fgets(lineBuffer, sizeof(lineBuffer), fp) != NULL) { // Read a line from the file
        if (sscanf(lineBuffer, "%d %c", &page, &operation) != 2) { // Parse page number and operation from the line
            fprintf(stderr, "Error parsing line %d of access.list: Invalid format\n", lineNumber);
            continue; // Skip to the next line on error
        }

        totalAccesses++;           
        if (operation == 'R') totalReads++;  
        else totalWrites++;

        // Check if page is already in memory (page hit)
        bool pageHit = false;
        int hitIndex = -1; 
        for (int i = 0; i < frames; i++) { 
            if (pageTable[i].page_number == page) {
                pageTable[i].referenced = true;
                hitIndex = i;
                if (!isFIFO && operation == 'W') { // Only update modified bit for NRU and write operations
                    pageTable[i].modified = true;
                }
                pageHit = true;
                break; 
            }
        }
        
        // Page fault handling
        if (!pageHit) {
            pageFaults++;            
            
            // Find victim page index based on algorithm
            int victimIndex;
            if (isFIFO) {
                victimIndex = findVictimPageFIFO(frames, &currentFrame); 
            } else {
                victimIndex = findVictimPageNRU(pageTable, frames, totalAccesses);
            }

            // Replace victim page
            pageTable[victimIndex] = (Page){page, true, operation == 'W'}; // Add the new page to the page table
            
            // Update lastUsed for NRU (only when there's a page fault or a hit for NRU)
            if (!isFIFO) {
                pageTable[victimIndex].lastUsed = totalAccesses;
            } else if (hitIndex != -1) { 
                pageTable[hitIndex].lastUsed = totalAccesses;
            } 
        }

        printf("Access %d: Page %d, Operation %c\n", totalAccesses, page, operation); // Add this line for debugging
        lineNumber++;
    }

    //Check for errors besides reaching EOF
    if (!feof(fp)) { 
        perror("Error reading from access.list");
        free(pageTable);
        exit(1); 
    }

    printf("Finished reading access.list\n");

    fclose(fp);
    free(pageTable);

    printResults(totalAccesses, totalReads, totalWrites, pageFaults);
}
