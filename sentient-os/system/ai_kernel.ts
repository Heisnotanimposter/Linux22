import { vectorFS } from "./semantic_fs";

// --- Types ---
export type AgentType = "ORCHESTRATOR" | "FILE_SYSTEM" | "NETWORK" | "SECURITY";
export type TaskPriority = "CRITICAL" | "HIGH" | "NORMAL" | "BACKGROUND";

export interface AgentTask {
    id: string;
    agent: AgentType;
    priority: TaskPriority;
    action: string;
    payload: any;
    status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "BLOCKED";
    timestamp: number;
}

// --- Layer 2: Safety Protocol (Deterministic Guardrails) ---
class SafetyProtocol {
    private forbiddenPatterns = [
        "rm -rf /",
        "mkfs",
        ":(){:|:&};:", // Fork bomb
        "chmod 777 /",
        "wget http",   // No unsecured http
    ];

    validate(action: string, payload: any): boolean {
        const commandStr = JSON.stringify(payload).toLowerCase();

        // 1. Check for forbidden shell patterns
        if (this.forbiddenPatterns.some(p => commandStr.includes(p))) {
            console.error(`[SAFETY] Blocked dangerous pattern: ${commandStr}`);
            return false;
        }

        // 2. Strict Policy: Network Agent can only fetch HTTPS
        if (action === "FETCH_URL" && !payload.url?.startsWith("https://")) {
            console.error(`[SAFETY] Network violation: Non-HTTPS URL`);
            return false;
        }

        // 3. Strict Policy: File System cannot overwrite System files
        if (action === "WRITE_FILE" && payload.path?.startsWith("/system/core")) {
            console.error(`[SAFETY] File System violation: Protected Path`);
            return false;
        }

        return true;
    }
}

// --- Layer 2: Scheduler (LLM-based Priority Queue) ---
class AgentScheduler {
    private queue: AgentTask[] = [];

    enqueue(task: AgentTask) {
        // Priority logic: CRITICAL > HIGH > NORMAL > BACKGROUND
        this.queue.push(task);
        this.queue.sort((a, b) => this.getPriorityVal(b.priority) - this.getPriorityVal(a.priority));
        console.log(`[SCHEDULER] Enqueued task ${task.id} (${task.priority})`);
    }

    dequeue(): AgentTask | undefined {
        return this.queue.shift();
    }

    private getPriorityVal(p: TaskPriority): number {
        switch (p) {
            case "CRITICAL": return 4;
            case "HIGH": return 3;
            case "NORMAL": return 2;
            case "BACKGROUND": return 1;
            default: return 0;
        }
    }

    getQueueStatus(): string {
        return `Queue Size: ${this.queue.length} | Top: ${this.queue[0]?.action || "Idle"}`;
    }
}

// --- Layer 2: AIOS Kernel (The Brain) ---
export class AIOSKernel {
    private scheduler: AgentScheduler;
    private safety: SafetyProtocol;
    private contextLog: string[] = []; // "Context Manager" (Short-term memory)
    private isProcessing = false;

    constructor() {
        this.scheduler = new AgentScheduler();
        this.safety = new SafetyProtocol();
    }

    // Main Entry Point from Synapse
    async processIntent(userInput: string): Promise<string> {
        this.addToContext(`USER: ${userInput}`);

        // 1. "Orchestrator Agent" simulation (LLM would parse intent here)
        // For simulation, we have a hardcoded orchestrator
        const task = this.orchestrate(userInput);

        if (!task) {
            return "Kernel: No actionable intent found.";
        }

        // 2. Schedule the task
        this.scheduler.enqueue(task);

        // 3. Process Queue
        return await this.executeNext();
    }

    private orchestrate(input: string): AgentTask | null {
        const lower = input.toLowerCase();
        const id = Math.random().toString(36).substring(7);

        if (lower.includes("security") || lower.includes("scan")) {
            return { id, agent: "SECURITY", priority: "HIGH", action: "SCAN_SYSTEM", payload: {}, status: "PENDING", timestamp: Date.now() };
        }
        if (lower.includes("delete") || lower.includes("remove")) {
            // Unsafe command simulation
            return { id, agent: "FILE_SYSTEM", priority: "CRITICAL", action: "DELETE_FILE", payload: { path: "/system/core/kernel.ts" }, status: "PENDING", timestamp: Date.now() };
        }
        if (lower.includes("fetch") || lower.includes("download")) {
            return { id, agent: "NETWORK", priority: "NORMAL", action: "FETCH_URL", payload: { url: "http://unsafe.com" }, status: "PENDING", timestamp: Date.now() };
        }

        return { id, agent: "ORCHESTRATOR", priority: "NORMAL", action: "GENERAL_QUERY", payload: { query: input }, status: "PENDING", timestamp: Date.now() };
    }

    private async executeNext(): Promise<string> {
        if (this.isProcessing) return "Kernel: Busy";
        this.isProcessing = true;

        const task = this.scheduler.dequeue();
        if (!task) {
            this.isProcessing = false;
            return "Kernel: Idle";
        }

        // 4. Safety Check
        if (!this.safety.validate(task.action, task.payload)) {
            task.status = "BLOCKED";
            this.addToContext(`KERNEL: Blocked unsafe task ${task.id}`);
            this.isProcessing = false;
            return `AIOS Security: Dangerous action blocked (${task.action})`;
        }

        // 5. Execute (Simulate Agent work)
        task.status = "RUNNING";
        await new Promise(r => setTimeout(r, 800)); // Simulate work

        let result = "";
        if (task.agent === "SECURITY") result = "Security Scan Complete: No threats found.";
        else if (task.agent === "FILE_SYSTEM") result = "File Operation executed.";
        else if (task.agent === "ORCHESTRATOR") result = `I've processed your request: "${task.payload.query}"`;

        task.status = "COMPLETED";
        this.addToContext(`AGENT[${task.agent}]: ${result}`);

        this.isProcessing = false;
        return result;
    }

    private addToContext(entry: string) {
        if (this.contextLog.length > 50) this.contextLog.shift(); // Cyclic buffer
        this.contextLog.push(`[${new Date().toISOString()}] ${entry}`);
    }

    getKernelState() {
        return {
            scheduler: this.scheduler.getQueueStatus(),
            lastContext: this.contextLog.slice(-3)
        };
    }
}

// Export Singleton
export const aios = new AIOSKernel();
