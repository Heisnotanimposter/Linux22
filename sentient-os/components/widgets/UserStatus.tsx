"use client";

import React, { useState } from "react";
import { useKernel } from "@/system/kernel";
import { motion } from "framer-motion";
import { Shield, CreditCard, Activity, Settings } from "lucide-react";

export const UserStatus = () => {
    const { user } = useKernel();
    const [mode, setMode] = useState<"Creator" | "Observer" | "God Mode">("Creator");

    if (!user) return null;

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed top-4 right-4 z-40 w-80 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
        >
            <div className="bg-white/5 p-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Shield size={20} />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-white">{user.name}</h3>
                        <p className="text-xs text-white/50">{user.id}</p>
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-4">
                {/* Balance / Income */}
                <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/20">
                    <div className="flex items-center gap-2 text-emerald-400">
                        <CreditCard size={16} />
                        <span className="text-xs font-bold uppercase">Balance</span>
                    </div>
                    <span className="text-lg font-mono text-white">${user.balance.toFixed(2)}</span>
                </div>

                {/* Mode Selection */}
                <div>
                    <label className="mb-2 block text-xs font-bold text-white/40 uppercase tracking-widest">Operation Mode</label>
                    <div className="grid grid-cols-3 gap-1 rounded-lg bg-white/5 p-1">
                        {["Creator", "Observer", "God"].map((m) => (
                            <button
                                key={m}
                                onClick={() => setMode(m as any)}
                                className={`rounded-md py-1 text-[10px] font-medium transition-all ${mode.startsWith(m)
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "text-white/40 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>

                {/* System Status */}
                <div className="flex items-center gap-2 text-xs text-white/30">
                    <Activity size={12} className="animate-pulse text-green-500" />
                    <span>System Operational</span>
                    <div className="ml-auto flex items-center gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        <span>API Connected</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
