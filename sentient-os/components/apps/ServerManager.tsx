"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Server, Database, Boxes, Activity, Play, StopCircle, Terminal, Network } from "lucide-react";
import { cn } from "@/lib/utils";

const AGENTS = [
    { id: "agent-1", name: "FileAnalyzer", model: "Llama-3-8B", status: "idle", load: 12 },
    { id: "agent-2", name: "SecurityAuditor", model: "Mistral-7B", status: "working", load: 85 },
    { id: "agent-3", name: "CodeGenerator", model: "Qwen-2-72B", status: "idle", load: 5 },
    { id: "agent-4", name: "DataMiner", model: "Llama-3-8B", status: "stopped", load: 0 },
];

const LOGS = [
    "[10:42:01] [Orchestrator] Spawning agent process 'SecurityAuditor'...",
    "[10:42:02] [Docker] Container 'agent-2-mistral' started (PID: 4492).",
    "[10:42:03] [LangGraph] Node 'classify_intent' executed successfully.",
    "[10:42:03] [Ollama] Model 'mistral:7b-quant' loaded into VRAM (4.2GB).",
    "[10:42:05] [Auth] User 'Creator' authorized for scope: 'read:filesystem'.",
];

export const ServerManager = () => {
    const [agents, setAgents] = useState(AGENTS);
    const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

    // Simulate load changes
    useEffect(() => {
        const interval = setInterval(() => {
            setAgents(prev => prev.map(a => ({
                ...a,
                load: a.status === "working" ? Math.min(100, Math.max(20, a.load + (Math.random() * 20 - 10))) : 0
            })));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const toggleAgent = (id: string) => {
        setAgents(prev => prev.map(a => {
            if (a.id === id) {
                return { ...a, status: a.status === "stopped" ? "idle" : "stopped" };
            }
            return a;
        }));
    };

    return (
        <div className="h-full w-full flex flex-col bg-[#0d1117] text-slate-200 font-mono text-xs overflow-hidden">
            {/* Header */}
            <div className="flex-none p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                <div className="flex items-center gap-3">
                    <Server size={18} className="text-blue-500" />
                    <div>
                        <h1 className="text-sm font-bold tracking-tight">MULTI-AGENT ORCHESTRATOR</h1>
                        <div className="text-[10px] text-slate-500 flex items-center gap-2">
                            <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Online</span>
                            <span>•</span>
                            <span>Docker Host: Generic Linux (Ubuntu 24.04)</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20 flex items-center gap-1">
                        <Boxes size={12} />
                        <span>LangGraph Active</span>
                    </div>
                    <div className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20 flex items-center gap-1">
                        <Database size={12} />
                        <span>PostgreSQL</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-3 min-h-0">
                {/* Agent List */}
                <div className="border-r border-slate-800 p-4 space-y-4 overflow-y-auto">
                    <h2 className="text-[10px] font-bold uppercase text-slate-500 tracking-wider mb-2">Micro-LLM Instances</h2>
                    {agents.map(agent => (
                        <div
                            key={agent.id}
                            onClick={() => setSelectedAgent(agent.id)}
                            className={cn(
                                "p-3 rounded border transition-all cursor-pointer relative overflow-hidden group",
                                selectedAgent === agent.id ? "bg-slate-800 border-blue-500/50" : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                            )}
                        >
                            <div className="flex justify-between items-start mb-2 relative z-10">
                                <div className="flex items-center gap-2">
                                    <div className={cn("w-2 h-2 rounded-full",
                                        agent.status === "working" ? "bg-green-500 animate-pulse" :
                                            agent.status === "idle" ? "bg-yellow-500" : "bg-red-500"
                                    )} />
                                    <span className="font-bold">{agent.name}</span>
                                </div>
                                <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-400">{agent.model}</span>
                            </div>

                            <div className="flex items-center justify-between text-[10px] text-slate-500 relative z-10">
                                <span>PID: {Math.floor(Math.random() * 5000) + 1000}</span>
                                <span>VRAM: {(agent.load / 10).toFixed(1)}GB</span>
                            </div>

                            {/* Load Bar */}
                            <div className="mt-3 h-1 bg-slate-800 rounded-full overflow-hidden relative z-10">
                                <motion.div
                                    className={cn("h-full", agent.status === "working" ? "bg-green-500" : "bg-slate-600")}
                                    animate={{ width: `${agent.load}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* Background Graph decoration */}
                            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                                <Activity size={40} />
                            </div>
                        </div>
                    ))}

                    <button className="w-full py-2 border border-dashed border-slate-700 text-slate-500 rounded hover:bg-slate-800 hover:text-slate-300 transition-colors text-[10px] uppercase tracking-wider">
                        + Deploy New Agent Container
                    </button>
                </div>

                {/* Workflow Visualization */}
                <div className="col-span-2 flex flex-col min-h-0 bg-[#0d1117] relative">
                    {/* Toolbar */}
                    <div className="h-10 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-900/30">
                        <div className="flex items-center gap-4 text-slate-500">
                            <div className="flex items-center gap-1 hover:text-slate-300 cursor-pointer"><Network size={14} /> Graph View</div>
                            <div className="flex items-center gap-1 hover:text-slate-300 cursor-pointer"><Terminal size={14} /> Console</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-1.5 hover:bg-slate-800 rounded text-green-500"><Play size={14} /></button>
                            <button className="p-1.5 hover:bg-slate-800 rounded text-red-500"><StopCircle size={14} /></button>
                        </div>
                    </div>

                    {/* Graph Area */}
                    <div className="flex-1 p-8 relative overflow-hidden">
                        {/* Simulated Nodes */}
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center text-center shadow-lg">
                            <div>
                                <div className="text-[10px] uppercase text-slate-500">Entry</div>
                                <div className="font-bold text-blue-400">User Request</div>
                            </div>
                        </div>

                        {/* Connection Line */}
                        <svg className="absolute inset-0 pointer-events-none">
                            <line x1="33%" y1="50%" x2="45%" y2="50%" stroke="#475569" strokeWidth="2" strokeDasharray="4" />
                            <line x1="57%" y1="50%" x2="68%" y2="30%" stroke="#475569" strokeWidth="2" />
                            <line x1="57%" y1="50%" x2="68%" y2="70%" stroke="#475569" strokeWidth="2" />
                        </svg>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-20 bg-slate-800 border-2 border-green-500/50 rounded flex items-center justify-center text-center shadow-lg shadow-green-500/10">
                            <div>
                                <div className="text-[10px] uppercase text-green-500">Router (LangGraph)</div>
                                <div className="font-bold text-slate-200">Intent Classifier</div>
                            </div>
                        </div>

                        <div className="absolute top-[30%] right-[15%] w-32 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center text-center shadow-lg opacity-50">
                            <div>
                                <div className="text-[10px] uppercase text-slate-500">Agent</div>
                                <div className="font-bold text-yellow-400">FileAnalyzer</div>
                            </div>
                        </div>

                        <div className="absolute top-[70%] right-[15%] w-32 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center text-center shadow-lg opacity-50">
                            <div>
                                <div className="text-[10px] uppercase text-slate-500">Agent</div>
                                <div className="font-bold text-red-400">SecurityAuditor</div>
                            </div>
                        </div>
                    </div>

                    {/* Console Logs */}
                    <div className="h-32 border-t border-slate-800 bg-black p-2 overflow-y-auto font-mono text-[10px] text-slate-400">
                        {LOGS.map((log, i) => (
                            <div key={i} className="mb-1">{log}</div>
                        ))}
                        <div className="animate-pulse text-green-500">_</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
