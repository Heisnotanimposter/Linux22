# Lightweight Linux Kernel & Low-Level OS Workspace

An ultra-lightweight operating system kernel codebase (`sentient-os`), virtual memory paging simulator (`Access`), and POSIX process management diagnostic suite (`HelloLinux`).

> [!IMPORTANT]
> **System Scope Note**: This repository is a low-level systems programming workspace consisting of kernel source code, CMake/Ninja toolchains, C-based paging algorithms, and POSIX process tools. It is **not** a web application or front-end project.

---

## 📐 System Architecture & Components

```
Linux22/
├── sentient-os/         # Ultra-lightweight custom OS kernel codebase & build system
│   ├── boot/            # OS Bootloader & boot data configurations
│   ├── hal/             # Hardware Abstraction Layer (HAL) for x86 architecture
│   ├── ntoskrnl/        # Core Operating System Kernel & System Services
│   ├── drivers/         # System & network device drivers (TCP/IP, storage, etc.)
│   └── CMakeLists.txt   # CMake build configuration for kernel & ISO compilation
│
├── Access/              # Virtual Memory & Page Replacement Simulator
│   ├── sim.c            # FIFO & NRU Page Replacement Algorithm Simulator engine
│   └── access.list      # Page access trace log (Page number & Read/Write operations)
│
├── HelloLinux/          # POSIX Process Management & Signal Diagnostic Suite
│   ├── execution.c      # Process signal trace scanner & PID offset calculator
│   ├── signal.c         # Process signal transmission utility (SIGUSR1 probe)
│   └── confession.txt   # Target process log input file
│
└── Makefile             # Root Makefile for compiling Linux utilities
```

---

## 🎯 Definite Use Cases

### Use Case 1: Ultra-Lightweight OS Kernel Compilation & ISO Booting
- **Purpose**: Build a lightweight kernel binary and generate a bootable ISO disk image (`bootcd.iso`).
- **Application**: Ideal for embedded systems development, OS kernel research, hypervisor testing (QEMU, VMware, VirtualBox), or custom low-resource operating system deployment.

### Use Case 2: Virtual Memory & Page Replacement Algorithm Evaluation
- **Purpose**: Simulate and evaluate Virtual Memory Paging behavior under realistic memory workloads.
- **Application**: Benchmark Page Fault rates, memory reads/writes, and page eviction efficiency comparing **FIFO (First-In-First-Out)** vs. **NRU (Not-Recently-Used)** eviction algorithms.

### Use Case 3: Process Monitoring & Inter-Process Signal Diagnostics
- **Purpose**: Probe system PID spaces and simulate Linux process signal reception and detection.
- **Application**: Useful for process lifecycle monitoring, user-space signal handling diagnostics (`SIGUSR1`), and low-level POSIX process scanning.

---

## 🛠️ Prerequisites & Installation

### Linux (Ubuntu / Debian / RHEL) & macOS
Install core build tools and compilers:

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install build-essential cmake ninja-build qemu-system-x86 gcc g++

# macOS (Homebrew)
brew install cmake ninja qemu gcc
```

---

## 🚀 How to Build and Run

### 1. Building System Utilities (`Access` & `HelloLinux`)

Compile all low-level system utilities in one command using the root Makefile:

```bash
# Build all utilities (sim, execution, signal)
make all
```

To clean up binaries:
```bash
make clean
```

---

### 2. Running Virtual Memory Simulator (`Access/sim`)

The `sim` program simulates memory page allocation and eviction given a frame count and replacement algorithm (**`fifo`** or **`nru`**).

#### Command Syntax:
```bash
./Access/sim [fifo|nru] <num_frames>
```

#### Example Runs:
```bash
# Run FIFO algorithm with 4 memory frames
./Access/sim fifo 4

# Run NRU (Not-Recently-Used) algorithm with 8 memory frames
./Access/sim nru 8
```

#### Sample Output:
```
==========================================
 Virtual Memory Simulation Results
==========================================
Total Page Accesses : 10000
Total Memory Reads  : 7512
Total Memory Writes : 2488
Total Page Faults   : 1420
Page Fault Rate     : 1420/10000 = 14.20%
==========================================
```

---

### 3. Running Process & Signal Utilities (`HelloLinux`)

#### A. Process Signal Trace Scanner (`execution`)
Scans target process trace files (`confession.txt`) for alert signals (`!!!`) and calculates PID offsets:
```bash
./HelloLinux/execution
```

#### B. Signal Transmission Utility (`signal`)
Sends POSIX `SIGUSR1` signals across a target process PID range:
```bash
# Run with default PID range [8000 - 8050]
./HelloLinux/signal

# Or specify custom PID range: ./HelloLinux/signal [start_pid] [end_pid]
./HelloLinux/signal 1000 1050
```

---

### 4. Building & Running the `sentient-os` Lightweight Kernel

The `sentient-os` kernel uses CMake and Ninja to build native binaries and a bootable CD image.

#### Step 1: Configure Build Environment
```bash
cd sentient-os

# Run system configure script
./configure.sh
```

#### Step 2: Build Bootable Kernel ISO Image
```bash
# Change to the generated build directory
cd output-MinGW-i386 # or build/

# Build full kernel ISO image
ninja bootcd
```

#### Step 3: Run Kernel Image in QEMU Hypervisor
```bash
qemu-system-i386 -cdrom bootcd.iso -m 512
```

---

## 📜 License & Acknowledgments
- Kernel code (`sentient-os`) is based on open-source kernel architecture licensed under [GNU GPL v2.0](sentient-os/COPYING).
- Simulators and process utilities licensed for open academic and low-level systems research.
