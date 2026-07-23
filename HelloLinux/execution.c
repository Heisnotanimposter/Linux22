#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main() {
    FILE *file;
    char line[256];
    int line_count = 0;
    int signal_count = 0;
    int phase2_results[64];
    int result_count = 0;

    memset(phase2_results, 0, sizeof(phase2_results));
    file = fopen("./confession.txt", "r");
    if (!file) {
        file = fopen("HelloLinux/confession.txt", "r");
    }
    if (!file) {
        perror("Error opening confession.txt");
        return 1;
    }

    while (fgets(line, sizeof(line), file)) {
        line_count++;
        if (strstr(line, "!!!")) {
            signal_count++;
            printf("Detected Signal (PID Offset = +%d)\n", line_count);
            usleep(100000); // 100ms delay for process detection simulation
            if (line_count >= 0 && result_count < 64) {
                phase2_results[result_count++] = line_count;
            }
        }
    }
    fclose(file); 
    printf("\nProcess Signal Scan Complete.\nTotal Target Process Signals Detected: %d\n", signal_count);
    return 0;
}

