CC=gcc
CFLAGS=-Wall -g

# Default target
all: sim
	
# Rule to build the sim executable
sim: sim.c
	$(CC) $(CFLAGS) -o sim sim.c
        
# Rule to clean up
clean:
	rm -f sim

