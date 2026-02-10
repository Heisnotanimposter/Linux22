"use client";

import React, { useState } from "react";
import { useKernel } from "@/system/kernel";
import { motion } from "framer-motion";
import { Zap, Cpu, Terminal, Gauge, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIMIZATION_MODULES = [
    { id: "net", name: "Network Stack", lang: "Rust", gain: "+40% Throughput" },
    { id: "gpu", name: "Render Pipeline", lang: "C++", gain: "-2ms Latency" },
    { id: "mem", name: "Memory Allocator", lang: "ASM", gain: "Zero-GC Overhead" },
    { id: "io", name: "NPU Interrupts", lang: "Rust", gain: "Real-time Inference" },
];

export const KernelOptimizer = () => {
    const { performanceMode, setPerformanceMode } = useKernel();
    const [compiling, setCompiling] = useState<string | null>(null);
    const [optimizedModules, setOptimizedModules] = useState<string[]>([]);

    const handleOptimize = (id: string, lang: string) => {
        setCompiling(id);
        setTimeout(() => {
            setOptimizedModules(prev => [...prev, id]);
            setCompiling(null);
        }, 2000);
    };

    return (
        <div className="h-full w-full flex flex-col bg-slate-950 text-slate-200 p-4 font-mono text-xs overflow-hidden">
            <div className="flex-none mb-4 pb-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Cpu size={18} className="text-orange-500" />
                    <h1 className="text-lg font-bold tracking-tight">KERNEL ARCHITECT</h1>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase text-slate-500">Mode:</span>
                    <button
                        onClick={() => setPerformanceMode(!performanceMode)}
                        className={cn(
                            "px-2 py-1 rounded text-[10px] font-bold uppercase transition-all",
                            performanceMode ? "bg-orange-500 text-black shadow-[0_0_10px_rgba(249,115,22,0.5)]" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                        )}
                    >
                        {performanceMode ? "Low-Latency (Pro)" : "Standard (Visual)"}
                    </button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
                {/* Modules List */}
                <div className="space-y-2">
                    <div className="text-[10px] uppercase text-slate-500 mb-2">Kernel Modules</div>
                    {OPTIMIZATION_MODULES.map((mod) => {
                        const isOptimized = optimizedModules.includes(mod.id);
                        const isCompiling = compiling === mod.id;

                        return (
                            <div key={mod.id} className="bg-slate-900 border border-slate-800 p-3 rounded group hover:border-orange-500/30 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-slate-300">{mod.name}</span>
                                    <span className={cn("text-[10px] px-1 rounded",
                                        mod.lang === "Rust" ? "bg-red-500/20 text-red-400" :
                                            mod.lang === "ASM" ? "bg-blue-500/20 text-blue-400" : "bg-yellow-500/20 text-yellow-400"
                                    )}>{mod.lang}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">{mod.gain}</span>
                                    <button
                                        disabled={isOptimized || isCompiling}
                                        onClick={() => handleOptimize(mod.id, mod.lang)}
                                        className={cn(
                                            "px-2 py-1 rounded text-[10px] flex items-center gap-1 transition-all",
                                            isOptimized ? "text-green-400" : "bg-slate-800 hover:bg-orange-500 hover:text-black"
                                        )}
                                    >
                                        {isOptimized ? "OPTIMIZED" : isCompiling ? "COMPILING..." : "RECOMPILE"}
                                        {!isOptimized && !isCompiling && <Zap size={10} />}
                                    </button>
                                </div>
                                {isCompiling && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2 }}
                                        className="h-0.5 bg-orange-500 mt-2"
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Output Log */}
                <div className="bg-black rounded border border-slate-800 p-3 font-mono text-[10px] text-slate-400 overflow-y-auto">
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-900">
                        <Terminal size={12} />
                        <span>Compiler Output</span>
                    </div>
                    {compiling && (
                        <div className="space-y-1">
                            <div className="text-yellow-500">Executing `cargo build --release --target=bpf`...</div>
                            <div>Compiling {OPTIMIZATION_MODULES.find(m => m.id === compiling)?.name}...</div>
                            <div className="text-slate-600">Verifying memory safety constraints...</div>
                            <div className="text-slate-600">Optimizing with LLVM...</div>
                        </div>
                    )}
                    {optimizedModules.map(id => (
                        <div key={id} className="text-green-500 mt-1">
                            Successfully injected optimized {OPTIMIZATION_MODULES.find(m => m.id === id)?.name} binary.
                        </div>
                    ))}
                    {optimizedModules.length === 0 && !compiling && (
                        <div className="text-slate-600 italic">Waiting for optimization targets...</div>
                    )}
                </div>
            </div>

            {performanceMode && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-orange-500 text-black px-3 py-1 text-[10px] font-bold rounded-full animate-pulse shadow-lg shadow-orange-500/20">
                    LOW-LATENCY MODE ACTIVE
                </div>
            )}
        </div>
    );
};
