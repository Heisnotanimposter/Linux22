"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Mock Knowledge Graph Node
interface ContextNode {
    id: string;
    type: "file" | "app" | "concept" | "person";
    label: string;
    relevance: number; // 0-1
    lastAccessed: Date;
}

// Simulated User Habit
interface UserHabit {
    trigger: string; // e.g., "Morning Login"
    action: string;  // e.g., "Open Code Editor"
    confidence: number;
}

interface ContextState {
    knowledgeGraph: ContextNode[];
    habits: UserHabit[];
    addContextNode: (node: Omit<ContextNode, "lastAccessed">) => void;
    getRelevantContext: (query: string) => ContextNode[];
}

const ContextDataLayer = createContext<ContextState | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [knowledgeGraph, setKnowledgeGraph] = useState<ContextNode[]>([
        { id: "n1", type: "concept", label: "Project Alpha", relevance: 0.9, lastAccessed: new Date() },
        { id: "n2", type: "person", label: "Collaborator X", relevance: 0.7, lastAccessed: new Date() },
        { id: "n3", type: "file", label: "budget_2025.csv", relevance: 0.8, lastAccessed: new Date() },
    ]);

    const [habits] = useState<UserHabit[]>([
        { trigger: "09:00 AM", action: "Summarize Daily News", confidence: 0.95 },
        { trigger: "Low Battery", action: "Enable Power Saver", confidence: 0.99 },
    ]);

    const addContextNode = (node: Omit<ContextNode, "lastAccessed">) => {
        setKnowledgeGraph((prev) => [
            ...prev,
            { ...node, lastAccessed: new Date() },
        ]);
    };

    const getRelevantContext = (query: string) => {
        // Simple mock semantic search
        return knowledgeGraph.filter(n => n.label.toLowerCase().includes(query.toLowerCase()));
    };

    // Simulate "Learning" - updates relevance over time
    useEffect(() => {
        const interval = setInterval(() => {
            setKnowledgeGraph(prev => prev.map(n => ({
                ...n,
                relevance: Math.max(0, n.relevance - 0.01) // Decay
            })));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ContextDataLayer.Provider value={{ knowledgeGraph, habits, addContextNode, getRelevantContext }}>
            {children}
        </ContextDataLayer.Provider>
    );
};

export const useContextLayer = () => {
    const context = useContext(ContextDataLayer);
    if (!context) throw new Error("useContextLayer must be used within a ContextProvider");
    return context;
};
