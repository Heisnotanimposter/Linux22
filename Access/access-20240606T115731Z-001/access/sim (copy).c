#include <stdio.h>      // 1. Standard input/output library
#include <stdlib.h>     // 2. General utility functions (e.g., atoi)
#include <string.h>     // 3. String manipulation functions (e.g., strcmp)
#include <stdbool.h>    // 4. Boolean data type (true/false)

#define MAX_PAGE_NUMBER 1001  // 5. Maximum page number (0 to 1000) + 1
#define MAX_FRAMES 1024       // 6. Maximum number of frames in physical memory

typedef struct {         // 7. Structure representing a page in memory
    int page_number;   // The actual page number
    bool referenced;  // True if page was referenced (accessed) recently
    bool modified;   // True if page was modified (written to)
    int lastUsed;     // Timestamp of last use (for NRU algorithm)
} Page;

void simulate(int frames, const char* algorithm);   // 8. Function prototypes for better code organization
int findVictimPageFIFO(int frames, int *currentFrame);
int findVictimPageNRU(Page *pageTable, int frames, int currentAccess);
void printResults(int totalAccesses, int totalReads, int totalWrites, int pageFaults, int pageHits); // 9. Modified to include pageHits


int main(int argc, char *argv[]) {
    // 10. Input validation: Check for correct number and type of arguments
    if (argc != 3 || (strcmp(argv[1], "fifo") != 0 && strcmp(argv[1], "nru") != 0)) {
        fprintf(stderr, "Usage: %s [fifo|nru] <num_frames (1-%d)>\n", argv[0], MAX_FRAMES);
        return 1; // Exit with an error code if invalid usage
    }

    int frames = atoi(argv[2]);

    // 11. Input Validation: Ensure a valid number of frames is provided.
    if (frames <= 0 || frames > MAX_FRAMES) {
        fprintf(stderr, "Error: Invalid number of frames.\n");
        return 1; 
    }    

    // 12. Start the page replacement simulation
    simulate(frames, argv[1]);

    return 0; // Indicate successful program execution
}

void simulate(int frames, const char *algorithm) {
    int pageFaults = 0, currentFrame = 0, totalAccesses = 0, totalReads = 0, totalWrites = 0;
    int pageHits = 0; // 13. Variable to track page hits
    Page *pageTable = calloc(frames, sizeof(Page));
    bool isFIFO = (strcmp(algorithm, "fifo") == 0);

    for (int i = 0; i < frames; i++) { // 14. Initialize the page table to empty (-1)
        pageTable[i].page_number = -1; 
    }

    FILE *fp = fopen("access.list", "r"); // 15. Open the "access.list" file in read mode
    if (!fp) {
        perror("Error opening access.list"); // 16. Handle file open error and exit
        free(pageTable);
        exit(1); 
    }

    int page;
    char operation;
    char lineBuffer[256]; // 17. Buffer for storing the line being read
    int lineNumber = 1;  // 18. Counter for tracking line numbers

    // 19. Main simulation loop - Process each access in the log file
    while (fgets(lineBuffer, sizeof(lineBuffer), fp) != NULL) { // Read a line from the file
        if (sscanf(lineBuffer, "%d %c", &page, &operation) != 2) { // 20. Parse page number and operation from the line
            fprintf(stderr, "Error parsing line %d of access.list: Invalid format\n", lineNumber);
            continue; // Skip to the next line on error
        }
        
        // Check if the page is already in memory (page hit)
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
        if (!pageHit) { // 19. If not a page hit, it's a page fault
            pageFaults++;            

            // 20. Find victim page index based on algorithm
            int victimIndex;
            if (isFIFO) {
                victimIndex = findVictimPageFIFO(frames, &currentFrame); 
            } else {
                victimIndex = findVictimPageNRU(pageTable, frames, totalAccesses);
            }

            // 21. Replace the victim page and update its information in the page table
            pageTable[victimIndex] = (Page){page, true, operation == 'W'}; // Add the new page to the page table
            
            // 22. Update lastUsed for NRU (only when there's a page fault or a hit for NRU)
            if (!isFIFO) {
                pageTable[victimIndex].lastUsed = totalAccesses;
            } else if (hitIndex != -1) { 
                pageTable[hitIndex].lastUsed = totalAccesses;
            } 
        }

        lineNumber++; // Increment the line number counter for error reporting
    }

    // 23. Check for file reading errors
    if (!feof(fp)) { // feof checks for end-of-file
        perror("Error reading from access.list");
        free(pageTable);
        exit(1); 
    }

    fclose(fp); // 24. Close the access log file.
    free(pageTable); // 25. Free dynamically allocated memory for the page table.

    // 26. Print the simulation results
    printResults(totalAccesses, totalReads, totalWrites, pageFaults);
}

// Function to find victim page for FIFO algorithm
int findVictimPageFIFO(int frames, int *currentFrame) {
    int victimIndex = *currentFrame;
    *currentFrame = (*currentFrame + 1) % frames; // Cycle to the next frame in the circular queue
    return victimIndex;
}

// Function to find victim page for NRU algorithm
int findVictimPageNRU(Page *pageTable, int frames, int currentAccess) {
    int victimIndex = 0;
    int victimClass = 3; // 27. Start with the highest class (3)

    // 28. Find the lowest class page (0, 1, 2, or 3)
    for (int i = 0; i < frames; i++) {
        int currentClass = (pageTable[i].referenced << 1) | pageTable[i].modified;

        // 29. If a lower class is found, update the victim
        if (currentClass < victimClass) {
            victimIndex = i;
            victimClass = currentClass;
        } else if (currentClass == victimClass) {
            // If in the same class, use LRU (Least Recently Used)
            if (pageTable[i].lastUsed < pageTable[victimIndex].lastUsed) {
                victimIndex = i;
            }
        }
    }
    
    pageTable[victimIndex].referenced = false; // 30. Reset the referenced bit of the victim page
    pageTable[victimIndex].modified = false;  // Reset the modified bit of the victim page
    return victimIndex; 
}


// Function to print simulation results
void printResults(int totalAccesses, int totalReads, int totalWrites, int pageFaults) {
    int pageHits = totalAccesses - pageFaults; // 32. Calculate the number of page hits

    printf("Total number of access: %d\n", totalAccesses); // 33. Print total accesses
    printf("Total number of read: %d\n", totalReads);     // 34. Print total reads
    printf("Total number of write: %d\n", totalWrites);    // 35. Print total writes
    printf("Number of page hits: %d\n", pageHits);     // 36. Print page hits
    printf("Number of page faults: %d\n", pageFaults);  // 37. Print page faults
    printf("Page fault rate: %d/%d = %.2f%%\n", pageFaults, totalAccesses,
           100.0 * pageFaults / totalAccesses);  // 38. Calculate and print page fault rate
}



