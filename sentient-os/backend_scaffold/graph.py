from typing import TypedDict, Annotated, List, Union
from langgraph.graph import StateGraph, END
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
import operator

# --- State Definition ---
class AgentState(TypedDict):
    messages: Annotated[List[BaseMessage], operator.add]
    next_step: str
    tools_output: dict

# --- Nodes (O(n) Scalability) ---
# Each node represents a distinct LLM call or Tool execution using Micro-LLMs

async def intent_classifier(state: AgentState):
    """
    Uses a small, fast model (e.g. Mistral-7B) to route the request.
    """
    last_message = state["messages"][-1].content
    # Simulating LLM classification
    print(f"[Node: Classifier] Analyzing: {last_message}")
    
    if "code" in last_message.lower():
        return {"next_step": "code_agent"}
    elif "audit" in last_message.lower():
        return {"next_step": "security_agent"}
    else:
        return {"next_step": "chat_agent"}

async def code_agent_node(state: AgentState):
    """
    Specialized Code Generation Agent (Qwen-2-7B or DeepSeek-Coder)
    """
    print("[Node: CodeAgent] Generating implementation...")
    # ollama.chat(model='deepseek-coder', messages=...)
    return {"messages": [AIMessage(content="Code generated successfully.")]}

async def security_agent_node(state: AgentState):
    """
    Specialized Security Auditor (Llama-Guard or Mistral)
    """
    print("[Node: SecurityAgent] Scanning for vulnerabilities...")
    return {"messages": [AIMessage(content="No vulnerabilities found in recent commit.")]}

# --- Graph Construction ---
workflow = StateGraph(AgentState)

# Add Nodes
workflow.add_node("router", intent_classifier)
workflow.add_node("code_agent", code_agent_node)
workflow.add_node("security_agent", security_agent_node)

# Set Entry Point
workflow.set_entry_point("router")

# Define Conditional Edges
def route_next(state: AgentState):
    return state["next_step"]

workflow.add_conditional_edges(
    "router",
    route_next,
    {
        "code_agent": "code_agent",
        "security_agent": "security_agent",
        "chat_agent": END 
    }
)

workflow.add_edge("code_agent", END)
workflow.add_edge("security_agent", END)

# Compile
app = workflow.compile()
print("LangGraph Workflow Compiled Successfully.")
