"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Activity, Database, Cpu, Brain, Zap, HardDrive, History, Lock } from "lucide-react";
import { cck, CCKState } from "@/system/cck_engine";

export const ServerManager = () => {
    const [kernelState, setKernelState] = useState<CCKState | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setKernelState(cck.getSystemState());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-slate-950 text-slate-200 p-6 font-mono overflow-y-auto">
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                    <Brain className="text-purple-500" size={24} />
                    <h1 className="text-xl font-bold tracking-tight text-slate-100">CREATE CORE KERNEL (CCK)</h1>
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest text-right">
                    Cognitive Resource Monitor v1.0 <br />
                    Build: RT-2026.02
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. Inference Engine Monitor */}
                <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-blue-400">
                            <Cpu size={18} />
                            <span className="text-sm font-bold uppercase">Inference CPU</span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${kernelState?.activeModel === "CLOUD_CLAUDE" ? "bg-orange-500/20 text-orange-400" : "bg-green-500/20 text-green-400"}`}>
                            {kernelState?.activeModel || "IDLE"}
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-black/50 p-3 rounded border border-slate-800">
                            <div className="text-[10px] text-slate-500 mb-1">TOKEN BUDGET</div>
                            <div className="text-xl font-bold text-slate-200">
                                ${kernelState?.tokenUsage.toFixed(4)}
                            </div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500">
                            <span>Efficiency: 99.4%</span>
                            <span>Router: ML-Automated</span>
                        </div>
                    </div>
                </div>

                {/* 2. Action Bus Status */}
                <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-orange-400">
                            <Zap size={18} />
                            <span className="text-sm font-bold uppercase">Action Bus (MCP)</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-[10px] text-slate-500 mb-2">ACTIVE SANDBOXES</div>
                        {!kernelState || kernelState.sandboxedProcesses.length === 0 ? (
                            <div className="text-xs text-slate-600 italic">No active WASM containers.</div>
                        ) : (
                            kernelState.sandboxedProcesses.map(id => (
                                <div key={id} className="flex items-center gap-2 text-xs bg-orange-500/5 border border-orange-500/10 p-2 rounded text-orange-400">
                                    <Lock size={12} /> Sandbox Process: {id}
                                </div>
                            ))
                        )}
                        <div className="mt-4 pt-4 border-t border-slate-800 text-[10px] text-slate-500 uppercase tracking-widest text-[9px]">
                            Driver Protocol: Model Context Interface
                        </div>
                    </div>
                </div>

                {/* 3. LTM (Context Persistence) */}
                <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-purple-400">
                            <History size={18} />
                            <span className="text-sm font-bold uppercase">LTM (RAM PERSISTENCE)</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="text-[10px] text-slate-500">COLD CONTEXT (SUMMARIZED)</div>
                        <div className="max-h-[100px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                            {!kernelState || kernelState.coldContext.length === 0 ? (
                                <div className="text-xs text-slate-600 italic">Memory bank empty.</div>
                            ) : (
                                kernelState.coldContext.map((summary, idx) => (
                                    <div key={idx} className="text-[11px] bg-slate-800/30 p-2 rounded border-l-2 border-purple-500 text-slate-400 leading-relaxed italic">
                                        {summary}
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
                            <span>Hot Items: {kernelState?.hotContext.length || 0}</span>
                            <span>Persistence: Active</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Knowledge Graph Visualization Placeholder */}
            <div className="mt-8 bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-50" />
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Database className="text-slate-500" size={20} />
                        <h2 className="font-bold text-slate-400 tracking-widest text-xs uppercase">Semantic Knowledge Graph</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="h-12 border border-slate-800 rounded-lg bg-black/20 flex items-center justify-center text-[10px] text-slate-600 group-hover:border-slate-700 transition-colors">Nodes: 1,429</div>
                        <div className="h-12 border border-slate-800 rounded-lg bg-black/20 flex items-center justify-center text-[10px] text-slate-600 group-hover:border-slate-700 transition-colors">Edges: 8,112</div>
                        <div className="h-12 border border-slate-800 rounded-lg bg-black/20 flex items-center justify-center text-[10px] text-slate-600 group-hover:border-slate-700 transition-colors">Clusters: 12</div>
                        <div className="h-12 border border-slate-800 rounded-lg bg-black/20 flex items-center justify-center text-[10px] text-green-500 group-hover:border-green-500/30 transition-colors cursor-pointer">Re-Index FS</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
