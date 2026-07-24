#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <errno.h>
#include <unistd.h>

int main(int argc, char *argv[]) {
    pid_t start_pid = 8000; 
    pid_t end_pid = 8050; // Default test range of 50 processes

    if (argc >= 2) {
        start_pid = atoi(argv[1]);
    }
    if (argc >= 3) {
        end_pid = atoi(argv[2]);
    }

    printf("Starting Process Signal Scanner for PID range [%d - %d]...\n", start_pid, end_pid);
    int active_targets = 0;

    for (pid_t pid = start_pid; pid <= end_pid; ++pid) {
        int result = kill(pid, SIGUSR1);

        if (result == 0) {
            printf("[+] Signal SIGUSR1 acknowledged by Process PID: %d\n", pid);
            active_targets++;
            usleep(50000); // 50ms delay
        } else {
            // Process either does not exist (ESRCH) or permission denied (EPERM)
            if (errno == EPERM) {
                printf("[!] Process PID %d exists (Permission Denied to signal)\n", pid);
                active_targets++;
            }
        }
        usleep(5000); // 5ms loop pace
    }

    printf("\nSignal Scan Complete. Active Target Processes Found: %d\n", active_targets);
    return 0;
}

