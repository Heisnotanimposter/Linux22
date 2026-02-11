"use client";

import React, { useState } from "react";
import { vectorFS, SemanticFile } from "@/system/semantic_fs";
import { Search, FileText, Code, Image, File, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const SemanticSearchApp = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<{ file: SemanticFile; score: number }[]>([]);
    const [searching, setSearching] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setSearching(true);
        // Simulate network latency for "Vector Search"
        setTimeout(async () => {
            const hits = await vectorFS.search(query);
            setResults(hits);
            setSearching(false);
        }, 800);
    };

    return (
        <div className="h-full w-full flex flex-col bg-slate-900/90 text-slate-200 p-6" role="search">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-light mb-2">Semantic File System</h1>
                <p className="text-sm text-slate-500">Search by intent, concept, or meaning. Not just filenames.</p>
            </div>

            <form onSubmit={handleSearch} className="mb-8 relative max-w-lg mx-auto w-full">
                <label htmlFor="semantic-search-input" className="sr-only">Search files by concept or intent</label>
                <input
                    id="semantic-search-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., 'Where is the money report?' or 'Future plans'"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3 pl-12 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-lg"
                    aria-label="Semantic Search Input"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
                {searching && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2" role="status" aria-label="Searching...">
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="sr-only">Searching...</span>
                    </div>
                )}
            </form>

            <div className="flex-1 overflow-y-auto max-w-2xl mx-auto w-full space-y-3" aria-live="polite">
                <AnimatePresence>
                    {results.map((hit, index) => (
                        <motion.div
                            key={hit.file.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:bg-slate-800 transition-colors group cursor-pointer"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                        {hit.file.type === "code" ? <Code size={24} /> :
                                            hit.file.type === "image" ? <Image size={24} /> :
                                                <FileText size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-slate-200 group-hover:text-blue-400 transition-colors">
                                            {hit.file.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 line-clamp-1">{hit.file.content}</p>
                                        <div className="flex gap-2 mt-2">
                                            {hit.file.tags.map(tag => (
                                                <span key={tag} className="text-[10px] bg-slate-700 px-2 py-0.5 rounded-full text-slate-300">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-emerald-400">{(hit.score * 100).toFixed(0)}%</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Relevance</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {!searching && results.length === 0 && query && (
                    <div className="text-center text-slate-600 mt-10">
                        <Info className="mx-auto mb-2 opacity-50" />
                        <p>No semantic matches found in the vector space.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
