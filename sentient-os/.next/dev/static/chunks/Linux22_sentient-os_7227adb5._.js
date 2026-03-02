(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Linux22/sentient-os/system/context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextProvider",
    ()=>ContextProvider,
    "useContextLayer",
    ()=>useContextLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ContextDataLayer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ContextProvider = ({ children })=>{
    _s();
    const [knowledgeGraph, setKnowledgeGraph] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "n1",
            type: "concept",
            label: "Project Alpha",
            relevance: 0.9,
            lastAccessed: new Date()
        },
        {
            id: "n2",
            type: "person",
            label: "Collaborator X",
            relevance: 0.7,
            lastAccessed: new Date()
        },
        {
            id: "n3",
            type: "file",
            label: "budget_2025.csv",
            relevance: 0.8,
            lastAccessed: new Date()
        }
    ]);
    const [habits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            trigger: "09:00 AM",
            action: "Summarize Daily News",
            confidence: 0.95
        },
        {
            trigger: "Low Battery",
            action: "Enable Power Saver",
            confidence: 0.99
        }
    ]);
    const addContextNode = (node)=>{
        setKnowledgeGraph((prev)=>[
                ...prev,
                {
                    ...node,
                    lastAccessed: new Date()
                }
            ]);
    };
    const getRelevantContext = (query)=>{
        // Simple mock semantic search
        return knowledgeGraph.filter((n)=>n.label.toLowerCase().includes(query.toLowerCase()));
    };
    // Simulate "Learning" - updates relevance over time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContextProvider.useEffect": ()=>{
            const interval = setInterval({
                "ContextProvider.useEffect.interval": ()=>{
                    setKnowledgeGraph({
                        "ContextProvider.useEffect.interval": (prev)=>prev.map({
                                "ContextProvider.useEffect.interval": (n)=>({
                                        ...n,
                                        relevance: Math.max(0, n.relevance - 0.01) // Decay
                                    })
                            }["ContextProvider.useEffect.interval"])
                    }["ContextProvider.useEffect.interval"]);
                }
            }["ContextProvider.useEffect.interval"], 10000);
            return ({
                "ContextProvider.useEffect": ()=>clearInterval(interval)
            })["ContextProvider.useEffect"];
        }
    }["ContextProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextDataLayer.Provider, {
        value: {
            knowledgeGraph,
            habits,
            addContextNode,
            getRelevantContext
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Linux22/sentient-os/system/context.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContextProvider, "VmE0aSBBZz07S4YYVHt/vCwHc4E=");
_c = ContextProvider;
const useContextLayer = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContextDataLayer);
    if (!context) throw new Error("useContextLayer must be used within a ContextProvider");
    return context;
};
_s1(useContextLayer, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/system/orchestrator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "orchestrator",
    ()=>orchestrator
]);
const orchestrator = {
    planTask: async (input)=>{
        // Simulate thinking delay
        await new Promise((resolve)=>setTimeout(resolve, 800));
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes("optimize") || lowerInput.includes("clean")) {
            return {
                goal: "System Optimization",
                steps: [
                    "scan_security",
                    "optimize_system"
                ]
            };
        }
        if (lowerInput.includes("work") || lowerInput.includes("code")) {
            return {
                goal: "Workspace Setup",
                steps: [
                    "open_app",
                    "create_file"
                ]
            };
        }
        return {
            goal: "General Task",
            steps: [
                "open_app"
            ]
        };
    },
    executeStep: async (step)=>{
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        switch(step){
            case "optimize_system":
                return "Releasing unused memory segments...";
            case "scan_security":
                return "Verifying Neural Code Integrity...";
            case "open_app":
                return "Launching requested application...";
            case "create_file":
                return "Generating context-aware document...";
            default:
                return "Executing unknown protocol...";
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/system/kernel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KernelProvider",
    ()=>KernelProvider,
    "useKernel",
    ()=>useKernel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/system/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/system/orchestrator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const KernelContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
;
const KernelProvider = ({ children })=>{
    _s();
    const [booted, setBooted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSleeping, setIsSleeping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRebooting, setIsRebooting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [performanceMode, setPerformanceMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processes, setProcesses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeProcessId, setActiveProcessId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KernelProvider.useEffect": ()=>{
            // Simulate boot sequence
            if (!booted && !isRebooting) {
                const timer = setTimeout({
                    "KernelProvider.useEffect.timer": ()=>{
                        setBooted(true);
                    }
                }["KernelProvider.useEffect.timer"], 2000);
                return ({
                    "KernelProvider.useEffect": ()=>clearTimeout(timer)
                })["KernelProvider.useEffect"];
            }
        }
    }["KernelProvider.useEffect"], [
        booted,
        isRebooting
    ]);
    const login = (name, id, apiKey)=>{
        setUser({
            name,
            id,
            apiKey,
            balance: 0
        });
        setIsLoggedIn(true);
    };
    const sleep = ()=>setIsSleeping(true);
    const wake = ()=>setIsSleeping(false);
    const reboot = ()=>{
        setIsRebooting(true);
        setBooted(false);
        setProcesses([]);
        setTimeout(()=>{
            setIsRebooting(false);
        // Boot effect will trigger again
        }, 3000);
    };
    const launchProcess = (name, content)=>{
        const id = Math.random().toString(36).substring(7);
        const newProcess = {
            id,
            name,
            type: "app",
            content,
            isMinimized: false,
            isMaximized: false,
            zIndex: processes.length + 1
        };
        setProcesses((prev)=>[
                ...prev,
                newProcess
            ]);
        setActiveProcessId(id);
    };
    const closeProcess = (id)=>{
        setProcesses((prev)=>prev.filter((p)=>p.id !== id));
        if (activeProcessId === id) {
            setActiveProcessId(null);
        }
    };
    const focusProcess = (id)=>{
        setActiveProcessId(id);
        setProcesses((prev)=>prev.map((p)=>p.id === id ? {
                    ...p,
                    zIndex: Math.max(...prev.map((pp)=>pp.zIndex)) + 1
                } : p));
    };
    // Auto-Drive Logic (Defined AFTER launchProcess)
    const handleAssistantRequest = async (input)=>{
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes("sleep")) {
            sleep();
            return;
        }
        if (lowerInput.includes("reboot") || lowerInput.includes("restart")) {
            reboot();
            return;
        }
        if (lowerInput.includes("diagnostics") || lowerInput.includes("test")) {
        // We'll implement this properly later, for now just launch the app if it exists
        // But since we can't import the component here directly without circular deps easily, 
        // we rely on the Orchestrator or just let the user open it via UI for now.
        // Actually, the orchestrator should return a plan that says "open_app_diagnostics"
        }
        if (lowerInput.includes("optimize") || lowerInput.includes("performance")) {
            setPerformanceMode(true);
            launchProcess("Kernel Optimizer", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Optimizing for Low-Latency... (Simulated)"
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/system/kernel.tsx",
                lineNumber: 146,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0)));
            return;
        }
        const plan = await __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orchestrator"].planTask(input);
        // Execute simulated steps
        for (const step of plan.steps){
            // In a real OS, this would trigger actual system calls
            // For simulation, we just log it or spawn a process visually
            launchProcess("System Agent", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 text-sm text-green-400 font-mono",
                children: [
                    "Executing: ",
                    step,
                    "..."
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/system/kernel.tsx",
                lineNumber: 156,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0)));
            await __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orchestrator"].executeStep(step);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KernelContext.Provider, {
            value: {
                booted,
                isLoggedIn,
                isSleeping,
                isRebooting,
                performanceMode,
                user,
                login,
                processes,
                activeProcessId,
                launchProcess,
                closeProcess,
                focusProcess,
                handleAssistantRequest,
                sleep,
                wake,
                reboot,
                setPerformanceMode
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/system/kernel.tsx",
            lineNumber: 163,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Linux22/sentient-os/system/kernel.tsx",
        lineNumber: 162,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(KernelProvider, "LinrDDZnYwhxmx6N3/RDTjSUr3Y=");
_c = KernelProvider;
const useKernel = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(KernelContext);
    if (!context) {
        throw new Error("useKernel must be used within a KernelProvider");
    }
    return context;
};
_s1(useKernel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "KernelProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginSequence",
    ()=>LoginSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/system/kernel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LoginSequence = ()=>{
    _s();
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [id, setId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Kept local, not in global state for now
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (name && id && password) {
            // Simple validation simulation
            login(name, id, apiKey);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-screen items-center justify-center bg-transparent z-50 absolute inset-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9,
                filter: "blur(10px)"
            },
            animate: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
            },
            transition: {
                duration: 0.8,
                ease: "easeOut"
            },
            className: "w-[400px] rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-2xl shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-light tracking-[0.2em] text-white",
                            children: "SENTIENT OS"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs text-white/40 uppercase tracking-widest",
                            children: "Identify Yourself"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "absolute left-3 top-3 h-5 w-5 text-white/30 group-focus-within:text-blue-400 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "User Name",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    className: "w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-blue-500/10 focus:outline-none transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-3 top-3 h-5 w-5 text-white/30 group-focus-within:text-blue-400 font-mono text-xs flex items-center justify-center",
                                    children: "ID"
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "User ID",
                                    value: id,
                                    onChange: (e)=>setId(e.target.value),
                                    className: "w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-blue-500/10 focus:outline-none transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "absolute left-3 top-3 h-5 w-5 text-white/30 group-focus-within:text-blue-400 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    className: "w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-blue-500/10 focus:outline-none transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                                    className: "absolute left-3 top-3 h-5 w-5 text-white/30 group-focus-within:text-blue-400 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "User API Key (Agentic Workflow)",
                                    value: apiKey,
                                    onChange: (e)=>setApiKey(e.target.value),
                                    className: "w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/20 focus:border-blue-500/50 focus:bg-blue-500/10 focus:outline-none transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            type: "submit",
                            className: "mt-6 w-full rounded-lg bg-blue-600/80 py-3 font-medium text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-colors",
                            children: "INITIALIZE SESSION"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginSequence, "yEQoUZ1D+opSQ2cayiUyFT/efXk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"]
    ];
});
_c = LoginSequence;
var _c;
__turbopack_context__.k.register(_c, "LoginSequence");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserStatus",
    ()=>UserStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/system/kernel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const UserStatus = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Creator");
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        className: "fixed top-4 right-4 z-40 w-80 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-white",
                                    children: user.name
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/50",
                                    children: user.id
                                }, void 0, false, {
                                    fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-emerald-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase",
                                        children: "Balance"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-mono text-white",
                                children: [
                                    "$",
                                    user.balance.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-xs font-bold text-white/40 uppercase tracking-widest",
                                children: "Operation Mode"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-1 rounded-lg bg-white/5 p-1",
                                children: [
                                    "Creator",
                                    "Observer",
                                    "God"
                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMode(m),
                                        className: `rounded-md py-1 text-[10px] font-medium transition-all ${mode.startsWith(m) ? "bg-blue-600 text-white shadow-lg" : "text-white/40 hover:text-white hover:bg-white/5"}`,
                                        children: m
                                    }, m, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-white/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                size: 12,
                                className: "animate-pulse text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "System Operational"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-1.5 rounded-full bg-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "API Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserStatus, "FWdCH6IvCqFI18d+mwBcBKfH4ww=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"]
    ];
});
_c = UserStatus;
var _c;
__turbopack_context__.k.register(_c, "UserStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentMonitor",
    ()=>AgentMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Mock Data for "Agents"
const AGENTS = [
    {
        id: "A-01",
        name: "Architect",
        status: "active",
        task: "Optimizing DOM structure..."
    },
    {
        id: "A-02",
        name: "Stylist",
        status: "idle",
        task: "Waiting for context..."
    },
    {
        id: "A-03",
        name: "LogicCore",
        status: "processing",
        task: "Calculating state vectors..."
    }
];
const AgentMonitor = ()=>{
    _s();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Simulate terminal logs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentMonitor.useEffect": ()=>{
            const interval = setInterval({
                "AgentMonitor.useEffect.interval": ()=>{
                    const newLog = `[${new Date().toLocaleTimeString()}] AGENT-CORE: Processing vector ${Math.random().toString(16).substring(7)}`;
                    setLogs({
                        "AgentMonitor.useEffect.interval": (prev)=>[
                                ...prev.slice(-10),
                                newLog
                            ]
                    }["AgentMonitor.useEffect.interval"]);
                }
            }["AgentMonitor.useEffect.interval"], 2000);
            return ({
                "AgentMonitor.useEffect": ()=>clearInterval(interval)
            })["AgentMonitor.useEffect"];
        }
    }["AgentMonitor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: 0
        },
        className: "fixed left-4 top-20 bottom-20 z-0 w-80 flex flex-col gap-4 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden pointer-events-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                        size: 16,
                                        className: "text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-white",
                                        children: "Active Agents"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 space-y-1",
                        children: AGENTS.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-8 rounded-full flex items-center justify-center bg-white/5 text-xs font-mono", agent.status === 'active' ? 'text-green-400 border border-green-500/30' : agent.status === 'processing' ? 'text-yellow-400 border border-yellow-500/30' : 'text-gray-400'),
                                        children: agent.id.split('-')[1]
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate text-xs font-medium text-white",
                                                        children: agent.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-white/30 uppercase",
                                                        children: agent.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                                lineNumber: 52,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-[10px] text-white/50",
                                                children: agent.task
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                                lineNumber: 56,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, agent.id, true, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden flex flex-col pointer-events-auto font-mono text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                size: 14,
                                className: "text-white/50"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/50",
                                children: "Terminal Output"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-4 overflow-hidden text-green-500/90 space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        className: "break-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/30 mr-2",
                                                children: "$"
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                                lineNumber: 78,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            log
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    opacity: [
                                        0,
                                        1,
                                        0
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 0.8
                                },
                                className: "h-4 w-2 bg-green-500 inline-block align-middle ml-1"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AgentMonitor, "6h9FKNtuyCQaVwwdLqmS9omOzEQ=");
_c = AgentMonitor;
var _c;
__turbopack_context__.k.register(_c, "AgentMonitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecurityShield",
    ()=>SecurityShield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SecurityShield = ()=>{
    _s();
    const [threatLevel, setThreatLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("low");
    const [scanning, setScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Simulate ongoing "Neural Integrity Checks"
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SecurityShield.useEffect": ()=>{
            const interval = setInterval({
                "SecurityShield.useEffect.interval": ()=>{
                    setScanning({
                        "SecurityShield.useEffect.interval": (prev)=>!prev
                    }["SecurityShield.useEffect.interval"]);
                }
            }["SecurityShield.useEffect.interval"], 5000);
            return ({
                "SecurityShield.useEffect": ()=>clearInterval(interval)
            })["SecurityShield.useEffect"];
        }
    }["SecurityShield.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        className: "fixed bottom-4 right-4 z-40 w-64 overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 p-3 flex items-center justify-between border-b border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                size: 16,
                                className: "text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-white uppercase tracking-wider",
                                children: "Zero Trust Core"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    scanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        size: 12,
                        className: "text-emerald-500 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                        lineNumber: 31,
                        columnNumber: 30
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-white/50",
                                children: "Neural Integrity"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-mono", threatLevel === 'low' ? "text-emerald-400" : "text-red-400"),
                                children: threatLevel === 'low' ? "100% SECURE" : "THREAT DETECTED"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 w-full bg-white/10 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                width: [
                                    "0%",
                                    "100%",
                                    "0%"
                                ]
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "h-full bg-emerald-500/50"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        size: 14,
                                        className: "text-white/40 group-hover:text-blue-400 mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-white/40 uppercase",
                                        children: "Firmware Lock"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        size: 14,
                                        className: "text-white/40 group-hover:text-blue-400 mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-white/40 uppercase",
                                        children: "Data Masking"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SecurityShield, "xqvzZVzbux8m2sYd1AUQlV2dXV4=");
_c = SecurityShield;
var _c;
__turbopack_context__.k.register(_c, "SecurityShield");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagnosticsApp",
    ()=>DiagnosticsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/battery.js [app-client] (ecmascript) <export default as Battery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/accessibility.js [app-client] (ecmascript) <export default as Accessibility>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TEST_CASES = [
    {
        id: 1,
        name: "System Boot Time Check",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        description: "Verifying boot < 10s on SSD..."
    },
    {
        id: 2,
        name: "High-Load Resource Algo",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        description: "Stressing CPU scheduler with 100 threads..."
    },
    {
        id: 3,
        name: "Memory Leak Detection",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        description: "Monitoring heap allocation over 24h cycle (simulated)..."
    },
    {
        id: 4,
        name: "File System Integrity",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"],
        description: "Simulating abrupt power loss & recovery..."
    },
    {
        id: 5,
        name: "Driver Compatibility",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
        description: "Hot-plugging virtual peripherals..."
    },
    {
        id: 6,
        name: "Permission Escalation",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"],
        description: "Attempting unauthorized root access..."
    },
    {
        id: 7,
        name: "Network Resilience",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
        description: "Switching 5G <-> Wi-Fi under load..."
    },
    {
        id: 8,
        name: "Power Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__["Battery"],
        description: "Verifying S3 Sleep/Wake states..."
    },
    {
        id: 9,
        name: "Accessibility Audit",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__["Accessibility"],
        description: "Checking ARIA labels & screen reader hooks..."
    },
    {
        id: 10,
        name: "Update Rollback Resilience",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        description: "Simulating update failure & snapshot restore..."
    }
];
const DiagnosticsApp = ()=>{
    _s();
    const [activeTestId, setActiveTestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [completedTests, setCompletedTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiagnosticsApp.useEffect": ()=>{
            // Run tests sequentially
            let currentIndex = 0;
            const runNextTest = {
                "DiagnosticsApp.useEffect.runNextTest": ()=>{
                    if (currentIndex >= TEST_CASES.length) {
                        setLogs({
                            "DiagnosticsApp.useEffect.runNextTest": (prev)=>[
                                    ...prev,
                                    "ALL SYSTEMS GREEN. OS READY FOR PRODUCTION."
                                ]
                        }["DiagnosticsApp.useEffect.runNextTest"]);
                        return;
                    }
                    const test = TEST_CASES[currentIndex];
                    setActiveTestId(test.id);
                    setLogs({
                        "DiagnosticsApp.useEffect.runNextTest": (prev)=>[
                                ...prev,
                                `[Running] ${test.name}: ${test.description}`
                            ]
                    }["DiagnosticsApp.useEffect.runNextTest"]);
                    setTimeout({
                        "DiagnosticsApp.useEffect.runNextTest": ()=>{
                            setCompletedTests({
                                "DiagnosticsApp.useEffect.runNextTest": (prev)=>[
                                        ...prev,
                                        test.id
                                    ]
                            }["DiagnosticsApp.useEffect.runNextTest"]);
                            setLogs({
                                "DiagnosticsApp.useEffect.runNextTest": (prev)=>[
                                        ...prev,
                                        `[Pass] ${test.name}: OK (Latency: ${Math.floor(Math.random() * 50)}ms)`
                                    ]
                            }["DiagnosticsApp.useEffect.runNextTest"]);
                            currentIndex++;
                            runNextTest();
                        }
                    }["DiagnosticsApp.useEffect.runNextTest"], 1500); // 1.5s per test
                }
            }["DiagnosticsApp.useEffect.runNextTest"];
            runNextTest();
        }
    }["DiagnosticsApp.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full flex flex-col bg-black/90 font-mono text-xs text-green-400 p-4 overflow-hidden",
        role: "main",
        "aria-label": "System Diagnostics Tool",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-none mb-4 border-b border-green-500/30 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold uppercase tracking-widest flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " System Diagnostics V2.5"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-500/50",
                        children: "Running Automated QA Suite..."
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-2 gap-4 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto space-y-2 pr-2 custom-scrollbar",
                        children: TEST_CASES.map((test)=>{
                            const isRunning = activeTestId === test.id;
                            const isDone = completedTests.includes(test.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded border flex items-center justify-between transition-all", isRunning ? "bg-green-500/20 border-green-500" : "bg-transparent border-green-500/10", isDone ? "text-green-400 opacity-50" : "text-green-600"),
                                tabIndex: 0,
                                role: "listitem",
                                "aria-label": `${test.name} status: ${isDone ? "Passed" : isRunning ? "Running" : "Pending"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(test.icon, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                                lineNumber: 81,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: test.name
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                                lineNumber: 82,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                        lineNumber: 80,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        size: 14,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                        lineNumber: 84,
                                        columnNumber: 47
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                        lineNumber: 85,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, test.id, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                lineNumber: 69,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black border border-green-500/20 rounded p-4 font-mono text-[10px] overflow-y-auto custom-scrollbar",
                        role: "log",
                        "aria-label": "Diagnostic logs",
                        children: [
                            logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-1 border-l-2 border-green-500/40 pl-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-50 min-w-[60px] inline-block",
                                            children: new Date().toLocaleTimeString()
                                        }, void 0, false, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        log
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>el?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DiagnosticsApp, "mLHYVtBsNnzvaHNnM0rNw3/QPMk=");
_c = DiagnosticsApp;
var _c;
__turbopack_context__.k.register(_c, "DiagnosticsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KernelOptimizer",
    ()=>KernelOptimizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/system/kernel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const OPTIMIZATION_MODULES = [
    {
        id: "net",
        name: "Network Stack",
        lang: "Rust",
        gain: "+40% Throughput"
    },
    {
        id: "gpu",
        name: "Render Pipeline",
        lang: "C++",
        gain: "-2ms Latency"
    },
    {
        id: "mem",
        name: "Memory Allocator",
        lang: "ASM",
        gain: "Zero-GC Overhead"
    },
    {
        id: "io",
        name: "NPU Interrupts",
        lang: "Rust",
        gain: "Real-time Inference"
    }
];
const KernelOptimizer = ()=>{
    _s();
    const { performanceMode, setPerformanceMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"])();
    const [compiling, setCompiling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [optimizedModules, setOptimizedModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleOptimize = (id, lang)=>{
        setCompiling(id);
        setTimeout(()=>{
            setOptimizedModules((prev)=>[
                    ...prev,
                    id
                ]);
            setCompiling(null);
        }, 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full flex flex-col bg-slate-950 text-slate-200 p-4 font-mono text-xs overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-none mb-4 pb-4 border-b border-slate-800 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                size: 18,
                                className: "text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-bold tracking-tight",
                                children: "KERNEL ARCHITECT"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase text-slate-500",
                                children: "Mode:"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPerformanceMode(!performanceMode),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1 rounded text-[10px] font-bold uppercase transition-all", performanceMode ? "bg-orange-500 text-black shadow-[0_0_10px_rgba(249,115,22,0.5)]" : "bg-slate-800 text-slate-400 hover:bg-slate-700"),
                                children: performanceMode ? "Low-Latency (Pro)" : "Standard (Visual)"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] uppercase text-slate-500 mb-2",
                                children: "Kernel Modules"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            OPTIMIZATION_MODULES.map((mod)=>{
                                const isOptimized = optimizedModules.includes(mod.id);
                                const isCompiling = compiling === mod.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 border border-slate-800 p-3 rounded group hover:border-orange-500/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-300",
                                                    children: mod.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] px-1 rounded", mod.lang === "Rust" ? "bg-red-500/20 text-red-400" : mod.lang === "ASM" ? "bg-blue-500/20 text-blue-400" : "bg-yellow-500/20 text-yellow-400"),
                                                    children: mod.lang
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-500",
                                                    children: mod.gain
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: isOptimized || isCompiling,
                                                    onClick: ()=>handleOptimize(mod.id, mod.lang),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1 rounded text-[10px] flex items-center gap-1 transition-all", isOptimized ? "text-green-400" : "bg-slate-800 hover:bg-orange-500 hover:text-black"),
                                                    children: [
                                                        isOptimized ? "OPTIMIZED" : isCompiling ? "COMPILING..." : "RECOMPILE",
                                                        !isOptimized && !isCompiling && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 74
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isCompiling && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                width: 0
                                            },
                                            animate: {
                                                width: "100%"
                                            },
                                            transition: {
                                                duration: 2
                                            },
                                            className: "h-0.5 bg-orange-500 mt-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, mod.id, true, {
                                    fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black rounded border border-slate-800 p-3 font-mono text-[10px] text-slate-400 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2 pb-2 border-b border-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                        lineNumber: 97,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Compiler Output"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            compiling && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-yellow-500",
                                        children: "Executing `cargo build --release --target=bpf`..."
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Compiling ",
                                            OPTIMIZATION_MODULES.find((m)=>m.id === compiling)?.name,
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-600",
                                        children: "Verifying memory safety constraints..."
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-600",
                                        children: "Optimizing with LLVM..."
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            optimizedModules.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-green-500 mt-1",
                                    children: [
                                        "Successfully injected optimized ",
                                        OPTIMIZATION_MODULES.find((m)=>m.id === id)?.name,
                                        " binary."
                                    ]
                                }, id, true, {
                                    fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))),
                            optimizedModules.length === 0 && !compiling && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-slate-600 italic",
                                children: "Waiting for optimization targets..."
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            performanceMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 left-1/2 -translate-x-1/2 bg-orange-500 text-black px-3 py-1 text-[10px] font-bold rounded-full animate-pulse shadow-lg shadow-orange-500/20",
                children: "LOW-LATENCY MODE ACTIVE"
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
                lineNumber: 120,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(KernelOptimizer, "pneNYgrhz81BDgIIJa47MXsrrps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"]
    ];
});
_c = KernelOptimizer;
var _c;
__turbopack_context__.k.register(_c, "KernelOptimizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/apps/ServerManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServerManager",
    ()=>ServerManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as StopCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AGENTS = [
    {
        id: "agent-1",
        name: "FileAnalyzer",
        model: "Llama-3-8B",
        status: "idle",
        load: 12
    },
    {
        id: "agent-2",
        name: "SecurityAuditor",
        model: "Mistral-7B",
        status: "working",
        load: 85
    },
    {
        id: "agent-3",
        name: "CodeGenerator",
        model: "Qwen-2-72B",
        status: "idle",
        load: 5
    },
    {
        id: "agent-4",
        name: "DataMiner",
        model: "Llama-3-8B",
        status: "stopped",
        load: 0
    }
];
const LOGS = [
    "[10:42:01] [Orchestrator] Spawning agent process 'SecurityAuditor'...",
    "[10:42:02] [Docker] Container 'agent-2-mistral' started (PID: 4492).",
    "[10:42:03] [LangGraph] Node 'classify_intent' executed successfully.",
    "[10:42:03] [Ollama] Model 'mistral:7b-quant' loaded into VRAM (4.2GB).",
    "[10:42:05] [Auth] User 'Creator' authorized for scope: 'read:filesystem'."
];
const ServerManager = ()=>{
    _s();
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(AGENTS);
    const [selectedAgent, setSelectedAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Simulate load changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServerManager.useEffect": ()=>{
            const interval = setInterval({
                "ServerManager.useEffect.interval": ()=>{
                    setAgents({
                        "ServerManager.useEffect.interval": (prev)=>prev.map({
                                "ServerManager.useEffect.interval": (a)=>({
                                        ...a,
                                        load: a.status === "working" ? Math.min(100, Math.max(20, a.load + (Math.random() * 20 - 10))) : 0
                                    })
                            }["ServerManager.useEffect.interval"])
                    }["ServerManager.useEffect.interval"]);
                }
            }["ServerManager.useEffect.interval"], 1000);
            return ({
                "ServerManager.useEffect": ()=>clearInterval(interval)
            })["ServerManager.useEffect"];
        }
    }["ServerManager.useEffect"], []);
    const toggleAgent = (id)=>{
        setAgents((prev)=>prev.map((a)=>{
                if (a.id === id) {
                    return {
                        ...a,
                        status: a.status === "stopped" ? "idle" : "stopped"
                    };
                }
                return a;
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full flex flex-col bg-[#0d1117] text-slate-200 font-mono text-xs overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-none p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                size: 18,
                                className: "text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-sm font-bold tracking-tight",
                                        children: "MULTI-AGENT ORCHESTRATOR"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-500 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 71
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Online"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 56,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Docker Host: Generic Linux (Ubuntu 24.04)"
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 64,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "LangGraph Active"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 65,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 68,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "PostgreSQL"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-3 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-r border-slate-800 p-4 space-y-4 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[10px] font-bold uppercase text-slate-500 tracking-wider mb-2",
                                children: "Micro-LLM Instances"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            agents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedAgent(agent.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded border transition-all cursor-pointer relative overflow-hidden group", selectedAgent === agent.id ? "bg-slate-800 border-blue-500/50" : "bg-slate-900/50 border-slate-800 hover:border-slate-700"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full", agent.status === "working" ? "bg-green-500 animate-pulse" : agent.status === "idle" ? "bg-yellow-500" : "bg-red-500")
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold",
                                                            children: agent.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-slate-400",
                                                    children: agent.model
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 87,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-[10px] text-slate-500 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "PID: ",
                                                        Math.floor(Math.random() * 5000) + 1000
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "VRAM: ",
                                                        (agent.load / 10).toFixed(1),
                                                        "GB"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 98,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 h-1 bg-slate-800 rounded-full overflow-hidden relative z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full", agent.status === "working" ? "bg-green-500" : "bg-slate-600"),
                                                animate: {
                                                    width: `${agent.load}%`
                                                },
                                                transition: {
                                                    duration: 0.5
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 bottom-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                size: 40
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 114,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 113,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, agent.id, true, {
                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                    lineNumber: 79,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full py-2 border border-dashed border-slate-700 text-slate-500 rounded hover:bg-slate-800 hover:text-slate-300 transition-colors text-[10px] uppercase tracking-wider",
                                children: "+ Deploy New Agent Container"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-2 flex flex-col min-h-0 bg-[#0d1117] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 hover:text-slate-300 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 106
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Graph View"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 hover:text-slate-300 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 106
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Console"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 130,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1.5 hover:bg-slate-800 rounded text-green-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 97
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 133,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1.5 hover:bg-slate-800 rounded text-red-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__["StopCircle"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 95
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 134,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-8 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center text-center shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] uppercase text-slate-500",
                                                    children: "Entry"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-blue-400",
                                                    children: "User Request"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 141,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "absolute inset-0 pointer-events-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "33%",
                                                y1: "50%",
                                                x2: "45%",
                                                y2: "50%",
                                                stroke: "#475569",
                                                strokeWidth: "2",
                                                strokeDasharray: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "57%",
                                                y1: "50%",
                                                x2: "68%",
                                                y2: "30%",
                                                stroke: "#475569",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 151,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "57%",
                                                y1: "50%",
                                                x2: "68%",
                                                y2: "70%",
                                                stroke: "#475569",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                lineNumber: 152,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 149,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-20 bg-slate-800 border-2 border-green-500/50 rounded flex items-center justify-center text-center shadow-lg shadow-green-500/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] uppercase text-green-500",
                                                    children: "Router (LangGraph)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-slate-200",
                                                    children: "Intent Classifier"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 155,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-[30%] right-[15%] w-32 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center text-center shadow-lg opacity-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] uppercase text-slate-500",
                                                    children: "Agent"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-yellow-400",
                                                    children: "FileAnalyzer"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-[70%] right-[15%] w-32 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center text-center shadow-lg opacity-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] uppercase text-slate-500",
                                                    children: "Agent"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-red-400",
                                                    children: "SecurityAuditor"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 170,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-32 border-t border-slate-800 bg-black p-2 overflow-y-auto font-mono text-[10px] text-slate-400",
                                children: [
                                    LOGS.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-1",
                                            children: log
                                        }, i, false, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                            lineNumber: 180,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-pulse text-green-500",
                                        children: "_"
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                        lineNumber: 182,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/apps/ServerManager.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServerManager, "JW1O1uP6n6R2nkFzeWHTvAhpe/Y=");
_c = ServerManager;
var _c;
__turbopack_context__.k.register(_c, "ServerManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/system/semantic_fs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockVectorDB",
    ()=>MockVectorDB,
    "vectorFS",
    ()=>vectorFS
]);
// Simulated "Embedding" generator (just random noise + deterministic seed based on content length)
const generateEmbedding = (text)=>{
    // In a real system, this would call OpenAI/HuggingFace
    // Here we return a random vector of length 5 (simplified for visualization)
    const seed = text.length;
    return Array.from({
        length: 5
    }, (_, i)=>Math.sin(seed * (i + 1)));
};
// Calculate Cosine Similarity
const cosineSimilarity = (vecA, vecB)=>{
    const dotProduct = vecA.reduce((sum, a, i)=>sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a)=>sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b)=>sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
};
class MockVectorDB {
    files = [];
    constructor(){
        // Initialize with some dummy data
        this.addFile("project_roadmap.pdf", "The strategic plan for Q4 2025 focusing on AI expansion.", [
            "strategy",
            "planning",
            "future"
        ]);
        this.addFile("q3_financials.xlsx", "Revenue report showing 40% growth in cloud sector.", [
            "money",
            "finance",
            "profit",
            "growth"
        ]);
        this.addFile("main.py", "Entry point for the FastAPI backend server.", [
            "code",
            "python",
            "server",
            "backend"
        ]);
        this.addFile("vacation_photos.zip", "Photos from the trip to Kyoto.", [
            "personal",
            "travel",
            "memory"
        ]);
        this.addFile("security_audit.log", "Logs showing zero critical vulnerabilities found.", [
            "security",
            "audit",
            "safety"
        ]);
    }
    addFile(name, content, tags) {
        const file = {
            id: Math.random().toString(36).substring(7),
            name,
            type: name.endsWith(".py") ? "code" : name.endsWith(".pdf") ? "document" : "document",
            content,
            embedding: generateEmbedding(content + tags.join(" ")),
            tags,
            path: `/home/user/docs/${name}`
        };
        this.files.push(file);
    }
    // Simulate Semantic Search
    // In reality: Convert query to vector -> ANN Search
    // Here: We cheat by checking if query concepts match file tags/content, but return a "similarity score"
    async search(query) {
        const queryVec = generateEmbedding(query);
        const lowerQuery = query.toLowerCase();
        return this.files.map((file)=>{
            let score = cosineSimilarity(queryVec, file.embedding); // Base physics score
            // Boost score based on simulated "concept match"
            if (file.tags.some((t)=>lowerQuery.includes(t)) || file.content.toLowerCase().includes(lowerQuery)) {
                score += 0.5;
            }
            // Add tag-based conceptual mapping (e.g. "money" -> "finance")
            if (lowerQuery.includes("money") && file.tags.includes("finance")) score += 0.4;
            if (lowerQuery.includes("plan") && file.tags.includes("strategy")) score += 0.4;
            // Normalize to 0-1 range roughly
            return {
                file,
                score: Math.min(0.99, Math.abs(score))
            };
        }).sort((a, b)=>b.score - a.score).filter((r)=>r.score > 0.4); // Threshold
    }
}
const vectorFS = new MockVectorDB();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SemanticSearchApp",
    ()=>SemanticSearchApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$semantic_fs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/system/semantic_fs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SemanticSearchApp = ()=>{
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searching, setSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSearch = async (e)=>{
        e.preventDefault();
        setSearching(true);
        // Simulate network latency for "Vector Search"
        setTimeout(async ()=>{
            const hits = await __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$semantic_fs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vectorFS"].search(query);
            setResults(hits);
            setSearching(false);
        }, 800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full flex flex-col bg-slate-900/90 text-slate-200 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-light mb-2",
                        children: "Semantic File System"
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "Search by intent, concept, or meaning. Not just filenames."
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSearch,
                className: "mb-8 relative max-w-lg mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        placeholder: "e.g., 'Where is the money report?' or 'Future plans'",
                        className: "w-full bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3 pl-12 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-lg"
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500",
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    searching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-4 top-1/2 -translate-y-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto max-w-2xl mx-auto w-full space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: results.map((hit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                transition: {
                                    delay: index * 0.1
                                },
                                className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:bg-slate-800 transition-colors group cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-blue-500/10 rounded-lg text-blue-400",
                                                    children: hit.file.type === "code" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 69
                                                    }, ("TURBOPACK compile-time value", void 0)) : hit.file.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 73
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-lg text-slate-200 group-hover:text-blue-400 transition-colors",
                                                            children: hit.file.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-400 line-clamp-1",
                                                            children: hit.file.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 mt-2",
                                                            children: hit.file.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] bg-slate-700 px-2 py-0.5 rounded-full text-slate-300",
                                                                    children: [
                                                                        "#",
                                                                        tag
                                                                    ]
                                                                }, tag, true, {
                                                                    fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                                    lineNumber: 72,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                            lineNumber: 59,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-emerald-400",
                                                    children: [
                                                        (hit.score * 100).toFixed(0),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-500 uppercase tracking-wider",
                                                    children: "Relevance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                            lineNumber: 77,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, hit.file.id, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    !searching && results.length === 0 && query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-slate-600 mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "mx-auto mb-2 opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No semantic matches found in the vector space."
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                                lineNumber: 89,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SemanticSearchApp, "NoppAqqbHGy/7EX/YUrFyuwm6nU=");
_c = SemanticSearchApp;
var _c;
__turbopack_context__.k.register(_c, "SemanticSearchApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/system/llm_renderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LLMRenderer",
    ()=>LLMRenderer,
    "generateUIFromPrompt",
    ()=>generateUIFromPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
"use client";
;
;
// --- Component Registry ---
const ComponentRegistry = {
    container: ({ children, className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            style: style,
            children: children
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    text: ({ content, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: className,
            children: content
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
            lineNumber: 21,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
    button: ({ label, onClick, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: `px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 ${className}`,
            onClick: onClick,
            children: label
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    input: ({ placeholder, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: placeholder,
            className: `w-full p-2 bg-slate-800 rounded border border-slate-700 ${className}`
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
            lineNumber: 28,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    image: ({ src, alt, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            className: `rounded-lg ${className}`
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    chart: ({ data, dataKey, xKey })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-64 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: data,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#334155"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: xKey,
                            stroke: "#94a3b8"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            stroke: "#94a3b8"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            contentStyle: {
                                backgroundColor: "#1e293b",
                                borderColor: "#334155"
                            },
                            itemStyle: {
                                color: "#e2e8f0"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: dataKey,
                            fill: "#3b82f6"
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
};
const LLMRenderer = ({ schema })=>{
    const Component = ComponentRegistry[schema.type];
    if (!Component) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500",
            children: [
                "Unknown component type: ",
                schema.type
            ]
        }, void 0, true, {
            fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
            lineNumber: 56,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ...schema.props,
        children: schema.children?.map((child, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LLMRenderer, {
                schema: child
            }, index, false, {
                fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
                lineNumber: 62,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Linux22/sentient-os/system/llm_renderer.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LLMRenderer;
const generateUIFromPrompt = async (prompt)=>{
    // Simulate LLM Latency
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    const lowerPrompt = prompt.toLowerCase();
    // 1. "Login Form" Intent
    if (lowerPrompt.includes("login") || lowerPrompt.includes("form")) {
        return {
            type: "container",
            props: {
                className: "p-6 bg-slate-900 text-white space-y-4"
            },
            children: [
                {
                    type: "text",
                    props: {
                        content: "Welcome Back",
                        className: "text-2xl font-bold text-center mb-4"
                    }
                },
                {
                    type: "input",
                    props: {
                        placeholder: "Username",
                        className: "mb-2"
                    }
                },
                {
                    type: "input",
                    props: {
                        placeholder: "Password",
                        className: "mb-4"
                    }
                },
                {
                    type: "button",
                    props: {
                        label: "Sign In",
                        className: "w-full"
                    }
                }
            ]
        };
    }
    // 2. "Chart" Intent
    if (lowerPrompt.includes("chart") || lowerPrompt.includes("graph") || lowerPrompt.includes("stats")) {
        return {
            type: "container",
            props: {
                className: "p-6 bg-slate-900 text-white"
            },
            children: [
                {
                    type: "text",
                    props: {
                        content: "System Performance Metrics",
                        className: "text-xl font-bold mb-4"
                    }
                },
                {
                    type: "chart",
                    props: {
                        data: [
                            {
                                name: "CPU",
                                val: 45
                            },
                            {
                                name: "RAM",
                                val: 60
                            },
                            {
                                name: "GPU",
                                val: 20
                            },
                            {
                                name: "NPU",
                                val: 85
                            }
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
        props: {
            className: "p-6 bg-slate-900 text-white text-center"
        },
        children: [
            {
                type: "text",
                props: {
                    content: "I created a simple view for: " + prompt,
                    className: "text-lg mb-4"
                }
            },
            {
                type: "button",
                props: {
                    label: "Action Button"
                }
            }
        ]
    };
};
var _c;
__turbopack_context__.k.register(_c, "LLMRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenerativeUIApp",
    ()=>GenerativeUIApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$llm_renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/system/llm_renderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const GenerativeUIApp = ({ prompt })=>{
    _s();
    const [schema, setSchema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GenerativeUIApp.useEffect": ()=>{
            const load = {
                "GenerativeUIApp.useEffect.load": async ()=>{
                    setLoading(true);
                    const ui = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$llm_renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUIFromPrompt"])(prompt);
                    setSchema(ui);
                    setLoading(false);
                }
            }["GenerativeUIApp.useEffect.load"];
            load();
        }
    }["GenerativeUIApp.useEffect"], [
        prompt
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full bg-black text-slate-200 overflow-y-auto",
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "animate-spin text-purple-500",
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx",
                    lineNumber: 25,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-mono text-purple-400",
                    children: "Generative AI is dreaming up interface..."
                }, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx",
                    lineNumber: 26,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx",
            lineNumber: 24,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 right-2 text-[10px] bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20 uppercase tracking-widest flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            size: 10
                        }, void 0, false, {
                            fileName: "[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx",
                            lineNumber: 31,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Generated by Synapse LLM"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx",
                    lineNumber: 30,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                schema && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$llm_renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LLMRenderer"], {
                    schema: schema
                }, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx",
                    lineNumber: 33,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx",
            lineNumber: 29,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GenerativeUIApp, "HJZxnqU3hshnuyiRcAi7nWhWIt0=");
_c = GenerativeUIApp;
var _c;
__turbopack_context__.k.register(_c, "GenerativeUIApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linux22/sentient-os/components/desktop/Membrane.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Membrane",
    ()=>Membrane
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/system/kernel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$auth$2f$LoginSequence$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/auth/LoginSequence.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$widgets$2f$UserStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/widgets/UserStatus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$widgets$2f$AgentMonitor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/widgets/AgentMonitor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$widgets$2f$SecurityShield$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/widgets/SecurityShield.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$DiagnosticsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/apps/DiagnosticsApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$KernelOptimizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/apps/KernelOptimizer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$ServerManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/apps/ServerManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$SemanticSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/apps/SemanticSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$GenerativeUIApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linux22/sentient-os/components/apps/GenerativeUIApp.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Membrane = ()=>{
    _s();
    const { booted, isLoggedIn, isSleeping, isRebooting, performanceMode, processes, closeProcess, focusProcess, activeProcessId, wake } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"])();
    // Sleep Mask
    if (isSleeping) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] bg-black cursor-pointer",
            onClick: wake,
            role: "button",
            "aria-label": "System is sleeping. Click to wake.",
            tabIndex: 0,
            onKeyDown: (e)=>e.key === "Enter" && wake()
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!booted || isRebooting) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen w-screen items-center justify-center bg-black text-white",
            role: "status",
            "aria-live": "polite",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                },
                className: "text-2xl font-light tracking-widest",
                children: isRebooting ? "REBOOTING SYSTEM..." : "WAKING UP..."
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 37,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundAmbience, {
                    performanceMode: false
                }, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$auth$2f$LoginSequence$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginSequence"], {}, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-screen w-screen overflow-hidden p-4 transition-colors duration-500", performanceMode ? "bg-black" : "bg-gradient-to-br from-gray-900 to-black"),
        role: "application",
        "aria-label": "Sentient OS Desktop",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundAmbience, {
                performanceMode: performanceMode
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$widgets$2f$UserStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStatus"], {}, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$widgets$2f$AgentMonitor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentMonitor"], {}, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$widgets$2f$SecurityShield$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecurityShield"], {}, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: processes.map((process)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9,
                            y: 20
                        },
                        onClick: ()=>focusProcess(process.id),
                        style: {
                            zIndex: process.zIndex
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/4 top-1/4 h-1/2 w-1/2 overflow-hidden rounded-2xl border shadow-2xl transition-all", // Low-Latency Mode removes blur and adds high-contrast borders
                        performanceMode ? "bg-black border-orange-500/50 shadow-none rounded-none" : "bg-black/40 border-white/10 backdrop-blur-xl", activeProcessId === process.id ? performanceMode ? "border-orange-500" : "shadow-blue-500/20 border-white/20" : ""),
                        drag: true,
                        dragMomentum: !performanceMode,
                        transition: {
                            duration: performanceMode ? 0 : 0.3
                        },
                        role: "dialog",
                        "aria-labelledby": `dialog-title-${process.id}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between px-4 py-2 cursor-grab active:cursor-grabbing border-b", performanceMode ? "bg-orange-900/20 border-orange-500/50 text-orange-400" : "bg-white/5 border-white/5 text-white/70"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        id: `dialog-title-${process.id}`,
                                        className: "text-sm font-medium",
                                        children: process.name
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            closeProcess(process.id);
                                        },
                                        className: "h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400",
                                        "aria-label": `Close ${process.name}`
                                    }, void 0, false, {
                                        fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[calc(100%-40px)] w-full overflow-hidden relative",
                                children: process.content
                            }, void 0, false, {
                                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, process.id, true, {
                        fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SynapseInput, {}, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Membrane, "y+Lqvn9SFjFvLRijhGj9LzPEaXw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"]
    ];
});
_c = Membrane;
// ... (BackgroundAmbience)
const BackgroundAmbience = ({ performanceMode })=>{
    if (performanceMode) return null; // No ambience in perf mode
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 z-0 opacity-20",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ],
                opacity: [
                    0.5,
                    0.8,
                    0.5
                ]
            },
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            },
            className: "absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-[120px]"
        }, void 0, false, {
            fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
            lineNumber: 135,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = BackgroundAmbience;
const SynapseInput = ()=>{
    _s1();
    const { handleAssistantRequest, launchProcess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && input.trim()) {
            const lowerNav = input.toLowerCase();
            if (lowerNav.includes("diagnostics")) {
                launchProcess("System Diagnostics", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$DiagnosticsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagnosticsApp"], {}, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                    lineNumber: 159,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0)));
                setInput("");
                return;
            }
            if (lowerNav.includes("optimizer") || lowerNav.includes("kernel")) {
                launchProcess("Kernel Optimizer", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$KernelOptimizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KernelOptimizer"], {}, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                    lineNumber: 164,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0)));
                setInput("");
                return;
            }
            if (lowerNav.includes("server") || lowerNav.includes("agent")) {
                launchProcess("Server Manager", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$ServerManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerManager"], {}, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                    lineNumber: 169,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0)));
                setInput("");
                return;
            }
            if (lowerNav.includes("search") || lowerNav.includes("find")) {
                launchProcess("Semantic Search", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$SemanticSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SemanticSearchApp"], {}, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                    lineNumber: 174,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0)));
                setInput("");
                return;
            }
            if (lowerNav.includes("generate") || lowerNav.includes("create") || lowerNav.includes("show me")) {
                launchProcess("Generative UI", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$components$2f$apps$2f$GenerativeUIApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenerativeUIApp"], {
                    prompt: input.replace("generate", "").replace("create", "").replace("show me", "").trim()
                }, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                    lineNumber: 179,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0)));
                setInput("");
                return;
            }
            handleAssistantRequest(input);
            setInput("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg",
                whileFocus: {
                    scale: 1.02
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: input,
                    onChange: (e)=>setInput(e.target.value),
                    onKeyDown: handleKeyDown,
                    placeholder: "Ask SentientOS... (Try 'optimizer' or 'diagnostics')",
                    className: "w-full bg-transparent px-6 py-4 text-lg text-white placeholder-white/30 focus:outline-none",
                    autoFocus: true,
                    "aria-label": "Synapse Command Input"
                }, void 0, false, {
                    fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                    lineNumber: 194,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 190,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-center text-xs text-white/30 uppercase tracking-widest",
                "aria-hidden": "true",
                children: "AI Native Operating System"
            }, void 0, false, {
                fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
                lineNumber: 205,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linux22/sentient-os/components/desktop/Membrane.tsx",
        lineNumber: 189,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(SynapseInput, "8CGRpuM7RvcGQiPMSs9KeUeMYmU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Linux22$2f$sentient$2d$os$2f$system$2f$kernel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernel"]
    ];
});
_c2 = SynapseInput;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Membrane");
__turbopack_context__.k.register(_c1, "BackgroundAmbience");
__turbopack_context__.k.register(_c2, "SynapseInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Linux22_sentient-os_7227adb5._.js.map