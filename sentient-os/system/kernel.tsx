"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ProcessId = string;

export interface Process {
    id: ProcessId;
    name: string;
    type: "app" | "agent" | "system";
    content?: ReactNode;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
}

interface User {
    name: string;
    id: string;
    apiKey: string;
    balance: number;
}

// ... (User Interface)

interface KernelState {
    booted: boolean;
    isLoggedIn: boolean;
    isSleeping: boolean;
    isRebooting: boolean;
    performanceMode: boolean; // Low-latency mode (no blurs, fast anims)
    user: User | null;
    processes: Process[];
    activeProcessId: ProcessId | null;
    login: (name: string, id: string, apiKey: string) => void;
    launchProcess: (name: string, content?: ReactNode) => void;
    closeProcess: (id: ProcessId) => void;
    focusProcess: (id: ProcessId) => void;
    handleAssistantRequest: (input: string) => void;
    sleep: () => void;
    wake: () => void;
    reboot: () => void;
    setPerformanceMode: (enabled: boolean) => void;
}

const KernelContext = createContext<KernelState | undefined>(undefined);

import { ContextProvider } from "./context";
import { orchestrator } from "./orchestrator";

// ... (Existing Imports)

// ... (Existing Interfaces)

export const KernelProvider = ({ children }: { children: ReactNode }) => {
    const [booted, setBooted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSleeping, setIsSleeping] = useState(false);
    const [isRebooting, setIsRebooting] = useState(false);
    const [performanceMode, setPerformanceMode] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [processes, setProcesses] = useState<Process[]>([]);
    const [activeProcessId, setActiveProcessId] = useState<ProcessId | null>(null);

    useEffect(() => {
        // Simulate boot sequence
        if (!booted && !isRebooting) {
            const timer = setTimeout(() => {
                setBooted(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [booted, isRebooting]);

    const login = (name: string, id: string, apiKey: string) => {
        setUser({
            name,
            id,
            apiKey,
            balance: 0, // Initial balance
        });
        setIsLoggedIn(true);
    };

    const sleep = () => setIsSleeping(true);
    const wake = () => setIsSleeping(false);

    const reboot = () => {
        setIsRebooting(true);
        setBooted(false);
        setProcesses([]);
        setTimeout(() => {
            setIsRebooting(false);
            // Boot effect will trigger again
        }, 3000);
    };

    const launchProcess = (name: string, content?: ReactNode) => {
        const id = Math.random().toString(36).substring(7);
        const newProcess: Process = {
            id,
            name,
            type: "app",
            content,
            isMinimized: false,
            isMaximized: false,
            zIndex: processes.length + 1,
        };
        setProcesses((prev) => [...prev, newProcess]);
        setActiveProcessId(id);
    };

    const closeProcess = (id: ProcessId) => {
        setProcesses((prev) => prev.filter((p) => p.id !== id));
        if (activeProcessId === id) {
            setActiveProcessId(null);
        }
    };

    const focusProcess = (id: ProcessId) => {
        setActiveProcessId(id);
        setProcesses((prev) =>
            prev.map((p) => (p.id === id ? { ...p, zIndex: Math.max(...prev.map((pp) => pp.zIndex)) + 1 } : p))
        );
    };

    // Auto-Drive Logic (Defined AFTER launchProcess)
    const handleAssistantRequest = async (input: string) => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes("sleep")) {
            sleep();
            return;
        }
        if (lowerInput.includes("reboot") || lowerInput.includes("restart")) {
            reboot();
            return;
        }
        if (lowerInput.includes("diagnostics") || lowerInput.includes("test")) {
            // We'll implement this properly later, for now just launch the app if it exists
            // But since we can't import the component here directly without circular deps easily, 
            // we rely on the Orchestrator or just let the user open it via UI for now.
            // Actually, the orchestrator should return a plan that says "open_app_diagnostics"
        }
        if (lowerInput.includes("optimize") || lowerInput.includes("performance")) {
            setPerformanceMode(true);
            launchProcess("Kernel Optimizer", <div>Optimizing for Low-Latency... (Simulated)</div>);
            return;
        }

        const plan = await orchestrator.planTask(input);

        // Execute simulated steps
        for (const step of plan.steps) {
            // In a real OS, this would trigger actual system calls
            // For simulation, we just log it or spawn a process visually
            launchProcess("System Agent", <div className="p-2 text-sm text-green-400 font-mono">Executing: {step}...</div>);
            await orchestrator.executeStep(step);
        }
    };

    return (
        <ContextProvider>
            <KernelContext.Provider
                value={{
                    booted,
                    isLoggedIn,
                    isSleeping,
                    isRebooting,
                    performanceMode,
                    user,
                    login,
                    processes,
                    activeProcessId,
                    launchProcess,
                    closeProcess,
                    focusProcess,
                    handleAssistantRequest,
                    sleep,
                    wake,
                    reboot,
                    setPerformanceMode
                }}
            >
                {children}
            </KernelContext.Provider>
        </ContextProvider>
    );
};

export const useKernel = () => {
    const context = useContext(KernelContext);
    if (!context) {
        throw new Error("useKernel must be used within a KernelProvider");
    }
    return context;
};
