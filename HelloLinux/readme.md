# HelloLinux - Process & Signal Utilities

This subfolder provides low-level Linux process signal scanner and detection scripts.

## Prerequisites & Dependencies
- Linux / POSIX Kernel Environment (Ubuntu Desktop / Server x86_64 / ARM64)
- GCC Compiler & Build Essentials
  ```bash
  sudo apt update
  sudo apt install build-essential
  ```

## Building Utilities
To compile the utilities directly inside this directory:
```bash
gcc -Wall -O2 execution.c -o execution
gcc -Wall -O2 signal.c -o signal
```

## How to Run

### 1. Process Signal Detector (`execution`)
Scans process log traces (`confession.txt`) for warning patterns (`!!!`) and outputs process ID offsets:
```bash
./execution
```

### 2. Signal Transmission Utility (`signal`)
Sends `SIGUSR1` signals across a target PID process range:
```bash
# Run with default PID range [8000 - 8050]
./signal

# Or specify custom PID range [start_pid] [end_pid]
./signal 1000 1100
```
