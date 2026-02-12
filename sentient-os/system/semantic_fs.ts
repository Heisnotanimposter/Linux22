export interface SemanticFile {
    id: string;
    name: string;
    type: "document" | "image" | "code" | "audio";
    content: string; // The "text" content
    embedding: number[]; // Simulated 384-dimensional vector
    tags: string[]; // Concept tags for simulation
    path: string;
}

// Simulated "Embedding" generator (just random noise + deterministic seed based on content length)
const generateEmbedding = (text: string): number[] => {
    // In a real system, this would call OpenAI/HuggingFace
    // Here we return a random vector of length 5 (simplified for visualization)
    const seed = text.length;
    return Array.from({ length: 5 }, (_, i) => Math.sin(seed * (i + 1)));
};

// Calculate Cosine Similarity
const cosineSimilarity = (vecA: number[], vecB: number[]) => {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
};

export class MockVectorDB {
    private files: SemanticFile[] = [];

    constructor() {
        // Initialize with some dummy data
        this.addFile("project_roadmap.pdf", "The strategic plan for Q4 2025 focusing on AI expansion.", ["strategy", "planning", "future"]);
        this.addFile("q3_financials.xlsx", "Revenue report showing 40% growth in cloud sector.", ["money", "finance", "profit", "growth"]);
        this.addFile("main.py", "Entry point for the FastAPI backend server.", ["code", "python", "server", "backend"]);
        this.addFile("vacation_photos.zip", "Photos from the trip to Kyoto.", ["personal", "travel", "memory"]);
        this.addFile("security_audit.log", "Logs showing zero critical vulnerabilities found.", ["security", "audit", "safety"]);
    }

    addFile(name: string, content: string, tags: string[]) {
        const file: SemanticFile = {
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
    async search(query: string): Promise<{ file: SemanticFile; score: number }[]> {
        const queryVec = generateEmbedding(query);
        const lowerQuery = query.toLowerCase();

        return this.files
            .map(file => {
                let score = cosineSimilarity(queryVec, file.embedding); // Base physics score

                // Boost score based on simulated "concept match"
                if (file.tags.some(t => lowerQuery.includes(t)) || file.content.toLowerCase().includes(lowerQuery)) {
                    score += 0.5;
                }

                // Add tag-based conceptual mapping (e.g. "money" -> "finance")
                if (lowerQuery.includes("money") && file.tags.includes("finance")) score += 0.4;
                if (lowerQuery.includes("plan") && file.tags.includes("strategy")) score += 0.4;

                // Normalize to 0-1 range roughly
                return { file, score: Math.min(0.99, Math.abs(score)) };
            })
            .sort((a, b) => b.score - a.score)
            .filter(r => r.score > 0.4); // Threshold
    }
}

export const vectorFS = new MockVectorDB();
