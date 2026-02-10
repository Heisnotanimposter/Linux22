"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export const SecurityShield = () => {
    const [threatLevel, setThreatLevel] = useState<"low" | "medium" | "high">("low");
    const [scanning, setScanning] = useState(true);

    // Simulate ongoing "Neural Integrity Checks"
    useEffect(() => {
        const interval = setInterval(() => {
            setScanning(prev => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-4 right-4 z-40 w-64 overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl"
        >
            <div className="bg-white/5 p-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Zero Trust Core</span>
                </div>
                {scanning && <Activity size={12} className="text-emerald-500 animate-spin" />}
            </div>

            <div className="p-3 space-y-3">
                {/* Threat Visualizer */}
                <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white/50">Neural Integrity</span>
                    <span className={cn("text-xs font-mono", threatLevel === 'low' ? "text-emerald-400" : "text-red-400")}>
                        {threatLevel === 'low' ? "100% SECURE" : "THREAT DETECTED"}
                    </span>
                </div>

                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="h-full bg-emerald-500/50"
                    />
                </div>

                {/* Privacy Toggles */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer group">
                        <Lock size={14} className="text-white/40 group-hover:text-blue-400 mb-1" />
                        <span className="text-[8px] text-white/40 uppercase">Firmware Lock</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer group">
                        <Eye size={14} className="text-white/40 group-hover:text-blue-400 mb-1" />
                        <span className="text-[8px] text-white/40 uppercase">Data Masking</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
