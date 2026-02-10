"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, CheckCircle, Activity, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data for "Agents"
const AGENTS = [
    { id: "A-01", name: "Architect", status: "active", task: "Optimizing DOM structure..." },
    { id: "A-02", name: "Stylist", status: "idle", task: "Waiting for context..." },
    { id: "A-03", name: "LogicCore", status: "processing", task: "Calculating state vectors..." },
];

export const AgentMonitor = () => {
    const [logs, setLogs] = useState<string[]>([]);

    // Simulate terminal logs
    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = `[${new Date().toLocaleTimeString()}] AGENT-CORE: Processing vector ${Math.random().toString(16).substring(7)}`;
            setLogs(prev => [...prev.slice(-10), newLog]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed left-4 top-20 bottom-20 z-0 w-80 flex flex-col gap-4 pointer-events-none"
        >
            {/* Active Agents List */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden pointer-events-auto">
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <Cpu size={16} className="text-blue-400" />
                        <span className="text-sm font-medium text-white">Active Agents</span>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </div>
                <div className="p-2 space-y-1">
                    {AGENTS.map(agent => (
                        <div key={agent.id} className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/5">
                            <div className={cn("h-8 w-8 rounded-full flex items-center justify-center bg-white/5 text-xs font-mono",
                                agent.status === 'active' ? 'text-green-400 border border-green-500/30' :
                                    agent.status === 'processing' ? 'text-yellow-400 border border-yellow-500/30' : 'text-gray-400'
                            )}>
                                {agent.id.split('-')[1]}
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex justify-between items-center">
                                    <span className="truncate text-xs font-medium text-white">{agent.name}</span>
                                    <span className="text-[10px] text-white/30 uppercase">{agent.status}</span>
                                </div>
                                <p className="truncate text-[10px] text-white/50">{agent.task}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Terminal Output */}
            <div className="flex-1 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden flex flex-col pointer-events-auto font-mono text-xs">
                <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                    <Terminal size={14} className="text-white/50" />
                    <span className="text-white/50">Terminal Output</span>
                </div>
                <div className="flex-1 p-4 overflow-hidden text-green-500/90 space-y-1">
                    <AnimatePresence>
                        {logs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="break-all"
                            >
                                <span className="text-white/30 mr-2">$</span>
                                {log}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="h-4 w-2 bg-green-500 inline-block align-middle ml-1"
                    />
                </div>
            </div>
        </motion.div>
    )
}
