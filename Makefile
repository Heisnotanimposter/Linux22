# Makefile for Lightweight Linux Utilities & Simulators

CC ?= gcc
CFLAGS ?= -Wall -Wextra -O2

.PHONY: all clean help

all: sim execution signal

sim: Access/sim.c
	@echo "Building Virtual Memory Simulator (sim)..."
	$(CC) $(CFLAGS) Access/sim.c -o Access/sim

execution: HelloLinux/execution.c
	@echo "Building Process Signal Detector (execution)..."
	$(CC) $(CFLAGS) HelloLinux/execution.c -o HelloLinux/execution

signal: HelloLinux/signal.c
	@echo "Building Process Signal Sender (signal)..."
	$(CC) $(CFLAGS) HelloLinux/signal.c -o HelloLinux/signal

clean:
	@echo "Cleaning compiled binaries..."
	rm -f Access/sim HelloLinux/execution HelloLinux/signal

help:
	@echo "Available targets:"
	@echo "  make all       - Build sim, execution, and signal binaries"
	@echo "  make sim       - Build Virtual Memory Simulator"
	@echo "  make execution - Build Process Signal Detector"
	@echo "  make signal    - Build Signal Transmission Utility"
	@echo "  make clean     - Remove compiled binaries"
