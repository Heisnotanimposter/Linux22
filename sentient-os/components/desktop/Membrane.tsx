"use client";

import React, { useState } from "react";
import { useKernel } from "@/system/kernel";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LoginSequence } from "@/components/auth/LoginSequence";
import { UserStatus } from "@/components/widgets/UserStatus";
import { AgentMonitor } from "@/components/widgets/AgentMonitor";
import { SecurityShield } from "@/components/widgets/SecurityShield";
import { DiagnosticsApp } from "@/components/apps/DiagnosticsApp";
import { KernelOptimizer } from "@/components/apps/KernelOptimizer";
import { ServerManager } from "@/components/apps/ServerManager";
import { SemanticSearchApp } from "@/components/apps/SemanticSearch";
import { GenerativeUIApp } from "@/components/apps/GenerativeUIApp";
import { aios } from "@/system/ai_kernel";

export const Membrane = () => {
    const { booted, isLoggedIn, isSleeping, isRebooting, performanceMode, processes, closeProcess, focusProcess, activeProcessId, wake } = useKernel();

    // Sleep Mask
    if (isSleeping) {
        return (
            <div
                className="fixed inset-0 z-[100] bg-black cursor-pointer"
                onClick={wake}
                role="button"
                aria-label="System is sleeping. Click to wake."
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && wake()}
            />
        );
    }

    if (!booted || isRebooting) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-black text-white" role="status" aria-live="polite">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="text-2xl font-light tracking-widest"
                >
                    {isRebooting ? "REBOOTING SYSTEM..." : "WAKING UP..."}
                </motion.div>
            </div>
        );
    }

    if (!isLoggedIn) {
        return (
            <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black p-4">
                <BackgroundAmbience performanceMode={false} />
                <LoginSequence />
            </div>
        )
    }

    return (
        <div
            className={cn(
                "relative h-screen w-screen overflow-hidden p-4 transition-colors duration-500",
                performanceMode ? "bg-black" : "bg-gradient-to-br from-gray-900 to-black"
            )}
            role="application"
            aria-label="Sentient OS Desktop"
        >
            <BackgroundAmbience performanceMode={performanceMode} />

            {/* Dashboard Widgets */}
            <UserStatus />
            <AgentMonitor />
            <SecurityShield />

            {/* Process Layer */}
            <AnimatePresence>
                {processes.map((process) => (
                    <motion.div
                        key={process.id}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={() => focusProcess(process.id)}
                        style={{ zIndex: process.zIndex }}
                        className={cn(
                            "absolute left-1/4 top-1/4 h-1/2 w-1/2 overflow-hidden rounded-2xl border shadow-2xl transition-all",
                            // Low-Latency Mode removes blur and adds high-contrast borders
                            performanceMode
                                ? "bg-black border-orange-500/50 shadow-none rounded-none"
                                : "bg-black/40 border-white/10 backdrop-blur-xl",
                            activeProcessId === process.id ? (performanceMode ? "border-orange-500" : "shadow-blue-500/20 border-white/20") : ""
                        )}
                        drag
                        dragMomentum={!performanceMode} // Disable momentum in perf mode for precision
                        transition={{ duration: performanceMode ? 0 : 0.3 }} // Instant transitions
                        role="dialog"
                        aria-labelledby={`dialog-title-${process.id}`}
                    >
                        {/* Window Header */}
                        <div className={cn(
                            "flex items-center justify-between px-4 py-2 cursor-grab active:cursor-grabbing border-b",
                            performanceMode ? "bg-orange-900/20 border-orange-500/50 text-orange-400" : "bg-white/5 border-white/5 text-white/70"
                        )}>
                            <span id={`dialog-title-${process.id}`} className="text-sm font-medium">{process.name}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeProcess(process.id);
                                }}
                                className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                                aria-label={`Close ${process.name}`}
                            />
                        </div>
                        {/* Window Content */}
                        <div className="h-[calc(100%-40px)] w-full overflow-hidden relative">
                            {/* If content is just a node, render it. If it's a specific App string, render component */}
                            {process.content}
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Synapse Input (Like Spotlight/Omnibar) */}
            <SynapseInput />
        </div>
    );
};

// ... (BackgroundAmbience)

const BackgroundAmbience = ({ performanceMode }: { performanceMode: boolean }) => {
    if (performanceMode) return null; // No ambience in perf mode

    return (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-20" aria-hidden="true">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-[120px]"
            />
        </div>
    );
};

const SynapseInput = () => {
    const { handleAssistantRequest, launchProcess } = useKernel();
    const [input, setInput] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && input.trim()) {
            const lowerNav = input.toLowerCase();
            if (lowerNav.includes("diagnostics")) {
                launchProcess("System Diagnostics", <DiagnosticsApp />);
                setInput("");
                return;
            }
            if (lowerNav.includes("optimizer") || lowerNav.includes("kernel")) {
                launchProcess("Kernel Optimizer", <KernelOptimizer />);
                setInput("");
                return;
            }
            if (lowerNav.includes("server") || lowerNav.includes("agent")) {
                launchProcess("Server Manager", <ServerManager />);
                setInput("");
                return;
            }
            if (lowerNav.includes("search") || lowerNav.includes("find")) {
                launchProcess("Semantic Search", <SemanticSearchApp />);
                setInput("");
                return;
            }
            if (lowerNav.includes("generate") || lowerNav.includes("create") || lowerNav.includes("show me")) {
                launchProcess("Generative UI", <GenerativeUIApp prompt={input.replace("generate", "").replace("create", "").replace("show me", "").trim()} />);
                setInput("");
                return;
            }

            // AIOS Kernel Integration (Layer 2)
            // Instead of direct kernel handling, we route through the Agent OS Kernel
            aios.processIntent(input).then((response) => {
                // For now, simpler notification. In a real system, this would pipe to a Notification Agent
                console.log("AIOS Response:", response);
                // Fallback to old handler for UI feedback if needed, or implement a Kernel Log Viewer
                handleAssistantRequest(input);
            });
            setInput("");
        }
    }

    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] z-50">
            <motion.div
                className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
                whileFocus={{ scale: 1.02 }}
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask SentientOS... (Try 'optimizer' or 'diagnostics')"
                    className="w-full bg-transparent px-6 py-4 text-lg text-white placeholder-white/30 focus:outline-none"
                    autoFocus
                    aria-label="Synapse Command Input"
                />
            </motion.div>
            <div className="mt-2 text-center text-xs text-white/30 uppercase tracking-widest" aria-hidden="true">
                AI Native Operating System
            </div>
        </div>
    )
}
