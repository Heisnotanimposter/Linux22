"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-6 text-center text-slate-200">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mb-4 rounded-full bg-red-500/10 p-4 text-red-500"
                    >
                        <AlertTriangle size={32} />
                    </motion.div>
                    <h2 className="mb-2 text-lg font-bold">System Self-Healing Triggered</h2>
                    <p className="mb-6 max-w-xs text-sm text-slate-400">
                        An anomaly was detected in this module. The Kernel is attempting to restore state.
                    </p>
                    <div className="mb-4 text-xs font-mono text-slate-500 bg-black/30 p-2 rounded max-w-full overflow-hidden text-ellipsis">
                        {this.state.error?.message}
                    </div>
                    <button
                        onClick={this.handleRetry}
                        className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                    >
                        <RefreshCcw size={14} />
                        Recover Process
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
