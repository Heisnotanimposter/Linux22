#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <errno.h>
#include <unistd.h>

int main() {
    pid_t start_pid = 8000; 
    pid_t end_pid = 8500;   

    int result;
    for (pid_t pid = start_pid; pid <= end_pid; ++pid) {
        result = kill(pid, SIGUSR1);

        if (result == 0) {
            printf("REACTED : %d.\n", pid);
            sleep(0.1);
            
        } else {
            printf("PASS\n");
        }
        
        sleep(0.1);
    }

    return 0;
}
