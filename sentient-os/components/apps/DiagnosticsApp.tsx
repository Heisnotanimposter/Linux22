"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Activity, Database, Key, Shield, Wifi, Battery, Accessibility, List } from "lucide-react";
import { cn } from "@/lib/utils";

const TEST_CASES = [
    { id: 1, name: "System Boot Time Check", icon: Activity, description: "Verifying boot < 10s on SSD..." },
    { id: 2, name: "High-Load Resource Algo", icon: Database, description: "Stressing CPU scheduler with 100 threads..." },
    { id: 3, name: "Memory Leak Detection", icon: Database, description: "Monitoring heap allocation over 24h cycle (simulated)..." },
    { id: 4, name: "File System Integrity", icon: List, description: "Simulating abrupt power loss & recovery..." },
    { id: 5, name: "Driver Compatibility", icon: Wifi, description: "Hot-plugging virtual peripherals..." },
    { id: 6, name: "Permission Escalation", icon: Key, description: "Attempting unauthorized root access..." },
    { id: 7, name: "Network Resilience", icon: Wifi, description: "Switching 5G <-> Wi-Fi under load..." },
    { id: 8, name: "Power Management", icon: Battery, description: "Verifying S3 Sleep/Wake states..." },
    { id: 9, name: "Accessibility Audit", icon: Accessibility, description: "Checking ARIA labels & screen reader hooks..." },
    { id: 10, name: "Update Rollback Resilience", icon: Shield, description: "Simulating update failure & snapshot restore..." },
];

export const DiagnosticsApp = () => {
    const [activeTestId, setActiveTestId] = useState<number | null>(null);
    const [completedTests, setCompletedTests] = useState<number[]>([]);
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        // Run tests sequentially
        let currentIndex = 0;

        const runNextTest = () => {
            if (currentIndex >= TEST_CASES.length) {
                setLogs(prev => [...prev, "ALL SYSTEMS GREEN. OS READY FOR PRODUCTION."]);
                return;
            }

            const test = TEST_CASES[currentIndex];
            setActiveTestId(test.id);
            setLogs(prev => [...prev, `[Running] ${test.name}: ${test.description}`]);

            setTimeout(() => {
                setCompletedTests(prev => [...prev, test.id]);
                setLogs(prev => [...prev, `[Pass] ${test.name}: OK (Latency: ${Math.floor(Math.random() * 50)}ms)`]);
                currentIndex++;
                runNextTest();
            }, 1500); // 1.5s per test
        };

        runNextTest();
    }, []);

    return (
        <div className="h-full w-full flex flex-col bg-black/90 font-mono text-xs text-green-400 p-4 overflow-hidden"
            role="main" aria-label="System Diagnostics Tool">
            <div className="flex-none mb-4 border-b border-green-500/30 pb-2">
                <h1 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                    <Activity size={20} /> System Diagnostics V2.5
                </h1>
                <p className="text-green-500/50">Running Automated QA Suite...</p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
                {/* Test List */}
                <div className="overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                    {TEST_CASES.map((test) => {
                        const isRunning = activeTestId === test.id;
                        const isDone = completedTests.includes(test.id);

                        return (
                            <div
                                key={test.id}
                                className={cn(
                                    "p-3 rounded border flex items-center justify-between transition-all",
                                    isRunning ? "bg-green-500/20 border-green-500" : "bg-transparent border-green-500/10",
                                    isDone ? "text-green-400 opacity-50" : "text-green-600"
                                )}
                                tabIndex={0}
                                role="listitem"
                                aria-label={`${test.name} status: ${isDone ? "Passed" : isRunning ? "Running" : "Pending"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <test.icon size={16} />
                                    <span>{test.name}</span>
                                </div>
                                {isRunning && <Activity size={14} className="animate-spin" />}
                                {isDone && <CheckCircle size={14} />}
                            </div>
                        );
                    })}
                </div>

                {/* Logs */}
                <div className="bg-black border border-green-500/20 rounded p-4 font-mono text-[10px] overflow-y-auto custom-scrollbar"
                    role="log" aria-label="Diagnostic logs">
                    {logs.map((log, i) => (
                        <div key={i} className="mb-1 border-l-2 border-green-500/40 pl-2">
                            <span className="opacity-50 min-w-[60px] inline-block">{new Date().toLocaleTimeString()}</span>
                            {log}
                        </div>
                    ))}
                    <div ref={(el) => el?.scrollIntoView({ behavior: "smooth" })} />
                </div>
            </div>
        </div>
    );
};
