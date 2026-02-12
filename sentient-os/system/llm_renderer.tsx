"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

// --- Types ---
type ComponentType = "container" | "text" | "button" | "chart" | "input" | "image";

interface GenUIComponent {
    type: ComponentType;
    props?: any;
    children?: GenUIComponent[];
}

// --- Component Registry ---
const ComponentRegistry: Record<string, React.FC<any>> = {
    container: ({ children, className, style }) => (
        <div className={className} style={style}>{children}</div>
    ),
    text: ({ content, className }) => <p className={className}>{content}</p>,
    button: ({ label, onClick, className }) => (
        <button className={`px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 ${className}`} onClick={onClick}>
            {label}
        </button>
    ),
    input: ({ placeholder, className }) => (
        <input type="text" placeholder={placeholder} className={`w-full p-2 bg-slate-800 rounded border border-slate-700 ${className}`} />
    ),
    image: ({ src, alt, className }) => (
        <img src={src} alt={alt} className={`rounded-lg ${className}`} />
    ),
    chart: ({ data, dataKey, xKey }) => (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey={xKey} stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }}
                        itemStyle={{ color: "#e2e8f0" }}
                    />
                    <Bar dataKey={dataKey} fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
};

// --- Renderer ---
export const LLMRenderer = ({ schema }: { schema: GenUIComponent }) => {
    const Component = ComponentRegistry[schema.type];

    if (!Component) {
        return <div className="text-red-500">Unknown component type: {schema.type}</div>;
    }

    return (
        <Component {...schema.props}>
            {schema.children?.map((child, index) => (
                <LLMRenderer key={index} schema={child} />
            ))}
        </Component>
    );
};

// --- Simulated LLM Generator ---
export const generateUIFromPrompt = async (prompt: string): Promise<GenUIComponent> => {
    // Simulate LLM Latency
    await new Promise(resolve => setTimeout(resolve, 1500));

    const lowerPrompt = prompt.toLowerCase();

    // 1. "Login Form" Intent
    if (lowerPrompt.includes("login") || lowerPrompt.includes("form")) {
        return {
            type: "container",
            props: { className: "p-6 bg-slate-900 text-white space-y-4" },
            children: [
                { type: "text", props: { content: "Welcome Back", className: "text-2xl font-bold text-center mb-4" } },
                { type: "input", props: { placeholder: "Username", className: "mb-2" } },
                { type: "input", props: { placeholder: "Password", className: "mb-4" } },
                { type: "button", props: { label: "Sign In", className: "w-full" } }
            ]
        };
    }

    // 2. "Chart" Intent
    if (lowerPrompt.includes("chart") || lowerPrompt.includes("graph") || lowerPrompt.includes("stats")) {
        return {
            type: "container",
            props: { className: "p-6 bg-slate-900 text-white" },
            children: [
                { type: "text", props: { content: "System Performance Metrics", className: "text-xl font-bold mb-4" } },
                {
                    type: "chart",
                    props: {
                        data: [
                            { name: "CPU", val: 45 }, { name: "RAM", val: 60 },
                            { name: "GPU", val: 20 }, { name: "NPU", val: 85 }
                        ],
                        dataKey: "val",
                        xKey: "name"
                    }
                }
            ]
        };
    }

    // Default Fallback
    return {
        type: "container",
        props: { className: "p-6 bg-slate-900 text-white text-center" },
        children: [
            { type: "text", props: { content: "I created a simple view for: " + prompt, className: "text-lg mb-4" } },
            { type: "button", props: { label: "Action Button" } }
        ]
    };
};
