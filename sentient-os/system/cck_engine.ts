import { vectorFS } from "./semantic_fs";

// --- CCK Constants ---
const TOKEN_COST_LOCAL = 0.0001;
const TOKEN_COST_CLOUD = 0.02;
const RECURSIVE_SUMMARIZATION_THRESHOLD = 5; // Summarize every 5 interactions

// --- Types ---
export type InferenceModel = "LOCAL_LLAMA" | "CLOUD_CLAUDE";
export type ActionStatus = "SANDBOXED" | "EXECUTED" | "DENIED" | "FAILED" | "PENDING_APPROVAL";

export interface CCKState {
    activeModel: InferenceModel;
    tokenUsage: number;
    hotContext: string[];
    coldContext: string[]; // Summarized memory
    activeGoal: string | null;
    sandboxedProcesses: string[];
}

export interface Action {
    id: string;
    tool: string;
    input: any;
    status: ActionStatus;
}

// --- The Create Core Kernel (CCK) ---
export class CCKEngine {
    private state: CCKState = {
        activeModel: "LOCAL_LLAMA",
        tokenUsage: 0,
        hotContext: [],
        coldContext: [],
        activeGoal: null,
        sandboxedProcesses: []
    };

    private actionBus: Action[] = [];

    // --- 1. Inference Engine (The CPU) ---
    private routeInference(input: string): InferenceModel {
        const complexKeywords = ["analyze architecture", "reason about", "complex", "plan", "code review"];
        const lower = input.toLowerCase();

        const model = complexKeywords.some(k => lower.includes(k)) ? "CLOUD_CLAUDE" : "LOCAL_LLAMA";
        this.state.activeModel = model;
        return model;
    }

    private chargeTokens(model: InferenceModel, length: number) {
        const cost = model === "LOCAL_LLAMA" ? TOKEN_COST_LOCAL : TOKEN_COST_CLOUD;
        this.state.tokenUsage += (length * cost);
    }

    // --- 2. Action Bus (The Drivers) ---
    private async executeInSandbox(tool: string, input: any): Promise<ActionStatus> {
        const id = Math.random().toString(36).substring(7);
        this.state.sandboxedProcesses.push(id);

        console.log(`[ACTION BUS] Initializing WASM Sandbox for ${tool}...`);

        // --- Agentic Drive Layer: Native Hooks ---
        if (tool.startsWith("native.")) {
            console.log(`[AGENTIC DRIVE] Intercepting native request: ${tool}`);

            // Safety Check: Require approval for kernel/sys_call
            if (tool === "native.sys_call" || tool === "native.mod_registry") {
                return "PENDING_APPROVAL";
            }
        }

        // MCP-style Tool Validation
        if (tool === "system.write" && input.path?.startsWith("/system")) {
            return "DENIED";
        }

        await new Promise(r => setTimeout(r, 600)); // Simulate Sandbox Isolation

        this.state.sandboxedProcesses = this.state.sandboxedProcesses.filter(p => p !== id);
        return "EXECUTED";
    }

    // --- 3. Context Persistence (The RAM) ---
    private addToContext(text: string) {
        this.state.hotContext.push(text);

        // Recursive Summarization
        if (this.state.hotContext.length >= RECURSIVE_SUMMARIZATION_THRESHOLD) {
            console.log("[LTM] Threshold reached. Performing Recursive Summarization...");
            const summary = `Summary of last ${RECURSIVE_SUMMARIZATION_THRESHOLD} turns: User interacted with CCK regarding ${this.state.activeGoal || "general tasks"}.`;
            this.state.coldContext.push(summary);
            this.state.hotContext = []; // Keep hot context lean
        }
    }

    // --- Main Workflow ---
    async handleRequest(userInput: string): Promise<{ response: string; model: InferenceModel }> {
        // A. Intent Parsing
        this.state.activeGoal = userInput;
        const model = this.routeInference(userInput);
        this.chargeTokens(model, userInput.length);
        this.addToContext(`User: ${userInput}`);

        // B. Tool Discovery (Action Bus)
        let response = "";
        let actionTaken = false;

        const lower = userInput.toLowerCase();
        if (lower.includes("write") || lower.includes("save")) {
            const status = await this.executeInSandbox("system.write", { path: "/user/files/note.txt" });
            response = status === "EXECUTED" ? "CCK: File saved in sandboxed environment." : "CCK: Action denied by Safety Layer.";
            actionTaken = true;
        } else if (lower.includes("kernel") || lower.includes("ntoskrnl")) {
            const status = await this.executeInSandbox("native.read_source", { path: "ntoskrnl/ke/wait.c" });
            response = `CCK: Accessing kernel source [${status}]. Reasoning about wait primitives...`;
            actionTaken = true;
        } else if (lower.includes("search") || lower.includes("find")) {
            response = "CCK: Searching Semantic FS Graph...";
            actionTaken = true;
        } else {
            response = `CCK [${model}]: I am architecting a plan for: "${userInput}".`;
        }

        this.addToContext(`CCK: ${response}`);
        return { response, model };
    }

    // --- System Restore / State Awareness ---
    getSystemState(): CCKState {
        return { ...this.state };
    }

    exportStateTree(): string {
        return JSON.stringify(this.state, null, 2);
    }
}

// Singleton Export
export const cck = new CCKEngine();
