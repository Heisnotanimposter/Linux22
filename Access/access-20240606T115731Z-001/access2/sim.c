#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Define constants
#define MAX_PAGE_NUMBER 1024 // Maximum number of pages
#define MAX_FRAMES 1024      // Maximum number of frames in memory
#define MAX_OPERATION_LENGTH 16 // Maximum length of "read" or "write"

// Structure to represent a page
typedef struct {
    int page_number;   // Page number
    bool referenced;   // Reference bit to check if the page has been accessed
    bool modified;     // Modified bit to check if the page has been written to
    int lastUsed;      // Last used timestamp for LRU algorithm
} Page;

// Function prototypes
void simulate(int frames, const char *algorithm);
int findVictimPageFIFO(int frames, int *currentFrame);
int findVictimPageNRU(Page *pageTable, int frames, int currentAccess);
void printResults(int totalAccesses, int totalReads, int totalWrites, int pageFaults, int pageHits);

int main(int argc, char *argv[]) {
    // Check if the command-line arguments are correct
    if (argc != 3 || (strcmp(argv[1], "fifo") != 0 && strcmp(argv[1], "nru") != 0)) {
        fprintf(stderr, "Usage: %s [fifo|nru] <num_frames (1-%d)>\n", argv[0], MAX_FRAMES);
        return 1; // Exit with an error code if invalid usage
    }

    int frames = atoi(argv[2]); // Convert the number of frames from string to integer

    // Check if the number of frames is within valid range
    if (frames <= 0 || frames > MAX_FRAMES) {
        fprintf(stderr, "Error: Invalid number of frames.\n");
        return 1;
    }    

    simulate(frames, argv[1]); // Call the simulate function with the given algorithm and number of frames

    return 0; // End of the main function
}

// Simulate page replacement based on the chosen algorithm (FIFO or NRU)
void simulate(int frames, const char *algorithm) {
    int pageFaults = 0, currentFrame = 0, totalAccesses = 0, totalReads = 0, totalWrites = 0, pageHits = 0;
    Page *pageTable = calloc(frames, sizeof(Page)); // Allocate memory for the page table
    bool isFIFO = (strcmp(algorithm, "fifo") == 0); // Check if the algorithm is FIFO
    char lineBuffer[256]; // Buffer to read lines from the input file
    int page; // Variable to store the current page number
    char operation[MAX_OPERATION_LENGTH]; // Variable to store the current operation (read/write)
    int lineNumber = 1; // Line number counter for error reporting

    for (int i = 0; i < frames; i++) {
        pageTable[i].page_number = -1; // Initialize page table with invalid page numbers
    }

    FILE *fp = fopen("access.list", "r"); // Open the input file containing the list of page accesses
    if (!fp) { // Check if the file was opened successfully
        perror("Error opening access.list"); // Print error message if the file could not be opened
        free(pageTable); // Free the allocated memory for the page table
        exit(1); // Exit with an error code
    }

    // Read and process page accesses from the file
    while (fgets(lineBuffer, sizeof(lineBuffer), fp) != NULL) { // Read each line from the file
        if (sscanf(lineBuffer, "%d %s", &page, operation) != 2) { // Parse the page number and operation from the line
            fprintf(stderr, "Error parsing line %d of access.list: Invalid format\n", lineNumber); // Print error message if the format is invalid
            continue; // Skip to the next line
        }

        totalAccesses++; // Increment the total number of accesses
        if (strcmp(operation, "read") == 0) totalReads++; // Increment the read counter if the operation is "read"
        else totalWrites++; // Increment the write counter if the operation is "write"

        // Check if page is already in memory (page hit)
        bool pageHit = false; // Flag to indicate if the page is already in memory
        int hitIndex = -1; // Index of the hit page in the page table
        for (int i = 0; i < frames; i++) { // Iterate through the page table
            if (pageTable[i].page_number == page) { // Check if the current page is already in memory
                pageTable[i].referenced = true; // Set the referenced bit
                hitIndex = i; // Update the hit index
                if (!isFIFO && strcmp(operation, "write") == 0) { // If the algorithm is NRU and the operation is "write"
                    pageTable[i].modified = true; // Set the modified bit
                }
                pageHit = true; // Set the page hit flag
                pageHits++; // Increment the page hit counter
                break; // Break out of the loop as the page is found in memory
            }
        }
        
        // Page fault handling
        if (!pageHit) { // If the page is not found in memory (page fault)
            pageFaults++; // Increment the page fault counter
            
            // Find victim page index based on algorithm
            int victimIndex;
            if (isFIFO) { // If the algorithm is FIFO
                victimIndex = findVictimPageFIFO(frames, &currentFrame); // Find the victim page using FIFO
            } else { // If the algorithm is NRU
                victimIndex = findVictimPageNRU(pageTable, frames, totalAccesses); // Find the victim page using NRU
            }

            // Replace victim page
            pageTable[victimIndex] = (Page){page, true, strcmp(operation, "write") == 0}; // Add the new page to the page table
            
            // Update lastUsed for NRU (only when there's a page fault or a hit for NRU)
            if (!isFIFO) { // If the algorithm is NRU
                pageTable[victimIndex].lastUsed = totalAccesses; // Update the last used timestamp for the victim page
            } else if (hitIndex != -1) { // If the algorithm is FIFO and there was a page hit
                pageTable[hitIndex].lastUsed = totalAccesses; // Update the last used timestamp for the hit page
            } 
        }

        lineNumber++; // Increment the line number counter
        //printf("Access %d: Page %d, Operation %s\n", totalAccesses, page, operation); // Add this line for debugging
    }

    if (!feof(fp)) { // Check for errors besides reaching EOF
        perror("Error reading from access.list"); // Print error message if there was an error reading the file
        free(pageTable); // Free the allocated memory for the page table
        exit(1); // Exit with an error code
    }

    fclose(fp); // Close the file after reading
    free(pageTable); // Free dynamically allocated memory for the page table

    // Print the simulation results
    printResults(totalAccesses, totalReads, totalWrites, pageFaults, pageHits); 
}

// Function to find victim page for FIFO algorithm
int findVictimPageFIFO(int frames, int *currentFrame) {
    int victimIndex = *currentFrame; // The victim is the page at the current frame position
    *currentFrame = (*currentFrame + 1) % frames; // Move the current frame pointer to the next frame in a circular queue
    return victimIndex; // Return the index of the victim page
}

// Function to find victim page for NRU algorithm
int findVictimPageNRU(Page *pageTable, int frames, int currentAccess) {
    int victimIndex = 0;
    int victimClass = 3; // Start with the highest class (3), assuming the worst-case scenario

    // Find the lowest class page (0, 1, 2, or 3)
    for (int i = 0; i < frames; i++) {
        int currentClass = (pageTable[i].referenced << 1) | pageTable[i].modified; // Calculate the class of the current page
        if (currentClass < victimClass) { // If a lower class is found, update victimIndex and victimClass
            victimIndex = i;
            victimClass = currentClass;
        } else if (currentClass == victimClass) {
            // If in the same class, use LRU (Least Recently Used)
            if (pageTable[i].lastUsed < pageTable[victimIndex].lastUsed) {
                victimIndex = i;
            }
        }
    }
    
    pageTable[victimIndex].referenced = false; // Reset the referenced bit of the victim page
    pageTable[victimIndex].modified = false; // Reset the modified bit of the victim page
    return victimIndex; // Return the index of the victim page
}

// Function to print simulation results
void printResults(int totalAccesses, int totalReads, int totalWrites, int pageFaults, int pageHits) {
    printf("Total number of access: %d\n", totalAccesses); // Print total accesses
    printf("Total number of read: %d\n", totalReads); // Print total reads
    printf("Total number of write: %d\n", totalWrites); // Print total writes
    printf("Number of page hits: %d\n", pageHits); // Print page hits
    printf("Number of page faults: %d\n", pageFaults); // Print page faults
    printf("Page fault rate: %d/%d = %.2f%%\n", pageFaults, totalAccesses, 100.0 * pageFaults / totalAccesses); // Calculate and print page fault rate
}


