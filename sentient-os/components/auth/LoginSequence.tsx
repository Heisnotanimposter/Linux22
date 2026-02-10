"use client";

import React, { useState } from "react";
import { useKernel } from "@/system/kernel";
import { motion } from "framer-motion";
import { Lock, User, Key, Cpu } from "lucide-react";

export const LoginSequence = () => {
    const { login } = useKernel();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [password, setPassword] = useState(""); // Kept local, not in global state for now

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && id && password) {
            // Simple validation simulation
            login(name, id, apiKey);
        }
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-transparent z-50 absolute inset-0">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[400px] rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-2xl shadow-2xl"
            >
                <div className="mb-8 text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400"
                    >
                        <Cpu size={32} />
                    </motion.div>
                    <h1 className="text-2xl font-light tracking-[0.2em] text-white">SENTIENT OS</h1>
                    <p className="mt-2 text-xs text-white/40 uppercase tracking-widest">Identify Yourself</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="group relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-white/30 group-focus-within:text-blue-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="User Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-blue-500/10 focus:outline-none transition-all"
                        />
                    </div>
                    <div className="group relative">
                        <div className="absolute left-3 top-3 h-5 w-5 text-white/30 group-focus-within:text-blue-400 font-mono text-xs flex items-center justify-center">ID</div>
                        <input
                            type="text"
                            placeholder="User ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-blue-500/10 focus:outline-none transition-all"
                        />
                    </div>
                    <div className="group relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-white/30 group-focus-within:text-blue-400 transition-colors" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-blue-500/10 focus:outline-none transition-all"
                        />
                    </div>
                    <div className="group relative">
                        <Key className="absolute left-3 top-3 h-5 w-5 text-white/30 group-focus-within:text-blue-400 transition-colors" />
                        <input
                            type="password"
                            placeholder="User API Key (Agentic Workflow)"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-blue-500/10 focus:outline-none transition-all"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-blue-600/80 py-3 font-medium text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-colors"
                    >
                        INITIALIZE SESSION
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};
