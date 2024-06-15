#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX_PAGE_NUMBER 1001
#define MAX_FRAMES 1024
#define MAX_OPERATION_LENGTH 10 // Maximum length of "read" or "write"

typedef struct {
    int page_number;
    bool referenced;
    bool modified;
    int lastUsed;
} Page;

void simulate(int frames, const char *algorithm);
int findVictimPageFIFO(int frames, int *currentFrame);
int findVictimPageNRU(Page *pageTable, int frames, int currentAccess);
void printResults(int totalAccesses, int totalReads, int totalWrites, int pageFaults, int pageHits);

int main(int argc, char *argv[]) {
    if (argc != 3 || (strcmp(argv[1], "fifo") != 0 && strcmp(argv[1], "nru") != 0)) {
        fprintf(stderr, "Usage: %s [fifo|nru] <num_frames (1-%d)>\n", argv[0], MAX_FRAMES);
        return 1; // Exit with an error code if invalid usage
    }

    int frames = atoi(argv[2]);

    if (frames <= 0 || frames > MAX_FRAMES) {
        fprintf(stderr, "Error: Invalid number of frames.\n");
        return 1;
    }    

    simulate(frames, argv[1]);

    return 0;
}

// Simulate page replacement based on the chosen algorithm (FIFO or NRU)
void simulate(int frames, const char *algorithm) {
    int pageFaults = 0, currentFrame = 0, totalAccesses = 0, totalReads = 0, totalWrites = 0, pageHits = 0;
    Page *pageTable = calloc(frames, sizeof(Page));
    bool isFIFO = (strcmp(algorithm, "fifo") == 0);
    char lineBuffer[256];
    int page;
    char operation[MAX_OPERATION_LENGTH];
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
    while (fgets(lineBuffer, sizeof(lineBuffer), fp) != NULL) {
        if (sscanf(lineBuffer, "%d %s", &page, operation) != 2) {
            fprintf(stderr, "Error parsing line %d of access.list: Invalid format\n", lineNumber);
            continue;
        }

        totalAccesses++;           
        if (strcmp(operation, "read") == 0) totalReads++;  
        else totalWrites++;

        // Check if page is already in memory (page hit)
        bool pageHit = false;
        int hitIndex = -1; 
        for (int i = 0; i < frames; i++) { 
            if (pageTable[i].page_number == page) {
                pageTable[i].referenced = true;
                hitIndex = i;
                if (!isFIFO && strcmp(operation, "write") == 0) {
                    pageTable[i].modified = true;
                }
                pageHit = true;
                pageHits++;
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
            pageTable[victimIndex] = (Page){page, true, strcmp(operation, "write") == 0}; // Add the new page to the page table
            
            // Update lastUsed for NRU (only when there's a page fault or a hit for NRU)
            if (!isFIFO) {
                pageTable[victimIndex].lastUsed = totalAccesses;
            } else if (hitIndex != -1) { 
                pageTable[hitIndex].lastUsed = totalAccesses;
            } 
        }

        lineNumber++; // Increment the line number counter
        //printf("Access %d: Page %d, Operation %s\n", totalAccesses, page, operation); // Add this line for debugging
    }
    //Check for errors besides reaching EOF
    if (!feof(fp)) { // 30. Check for errors besides reaching EOF
        perror("Error reading from access.list");
        free(pageTable);
        exit(1); 
    }

    fclose(fp);    // 31. Close the file after reading
    free(pageTable); // 32. Free dynamically allocated memory for the page table

    // 33. Print the simulation results
    printResults(totalAccesses, totalReads, totalWrites, pageFaults, pageHits); 
}

// Function to find victim page for FIFO algorithm
int findVictimPageFIFO(int frames, int *currentFrame) {
    int victimIndex = *currentFrame;             // 34. The victim is the page at the current frame position.
    *currentFrame = (*currentFrame + 1) % frames; // 35. Move the current frame pointer to the next frame in a circular queue.
    return victimIndex;                        // 36. Return the index of the victim page.
}

// Function to find victim page for NRU algorithm
int findVictimPageNRU(Page *pageTable, int frames, int currentAccess) {
    int victimIndex = 0;
    int victimClass = 3;  // 37. Start with the highest class (3), assuming the worst-case scenario.

    // 38. Find the lowest class page (0, 1, 2, or 3)
    for (int i = 0; i < frames; i++) {
        int currentClass = (pageTable[i].referenced << 1) | pageTable[i].modified; // 39. Calculate the class of the current page
        if (currentClass < victimClass) { // 40. If a lower class is found, update victimIndex and victimClass
            victimIndex = i;
            victimClass = currentClass;
        } else if (currentClass == victimClass) {
            // 41. If in the same class, use LRU (Least Recently Used)
            if (pageTable[i].lastUsed < pageTable[victimIndex].lastUsed) {
                victimIndex = i;
            }
        }
    }
    
    pageTable[victimIndex].referenced = false; // 42. Reset the referenced bit of the victim page
    pageTable[victimIndex].modified = false;  // 43. Reset the modified bit of the victim page
    return victimIndex; // 44. Return the index of the victim page.
}


// Function to print simulation results
void printResults(int totalAccesses, int totalReads, int totalWrites, int pageFaults, int pageHits) {
    printf("Total number of access: %d\n", totalAccesses); // 45. Print total accesses
    printf("Total number of read: %d\n", totalReads);     // 46. Print total reads
    printf("Total number of write: %d\n", totalWrites);    // 47. Print total writes
    printf("Number of page hits: %d\n", pageHits);     // 48. Print page hits
    printf("Number of page faults: %d\n", pageFaults);  // 49. Print page faults
    printf("Page fault rate: %d/%d = %.2f%%\n", pageFaults, totalAccesses,
           100.0 * pageFaults / totalAccesses);  // 50. Calculate and print page fault rate
}



