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
    while (fgets(line, sizeof(line), file)) {
        line_count++;
        if (strstr(line, "!!!")) {
            signal_count++;
            printf("Detected(PID = n+ %d)\n", line_count);
            sleep(1); 
            if (line_count >= 0 && line_count <= 256) {
                phase2_results[result_count++] = line_count;
            }
        }
    }
    fclose(file); 
    printf("\nTotal Mafia Count: %d\n", signal_count);
//    printf("Mafia IDs:\n");
//    for (int i = 0; i < result_count; i++) {
//        printf("(YourPID+%d)\n", phase2_results[i]);
//    }
    return 0;
}
