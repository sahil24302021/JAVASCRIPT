import "dotenv/config";
import { ChatOllama } from "@langchain/ollama";
import { TavilySearch } from "@langchain/tavily"; 
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { MemorySaver } from "@langchain/langgraph";


const model = new ChatOllama({
  model: "llama3.2", 
  temperature: 0,
});

const tools = [new TavilySearch({ maxResults: 3 })];


const agentCheckpointer = new MemorySaver();
const agent = createReactAgent({
  llm: model,
  tools,
  checkpointSaver: agentCheckpointer,
});

// 4. Run function
const runAgent = async (query) => {
  console.log(`\n--- Thinking about: ${query} ---`);
  
  try {
    const result = await agent.invoke(
      { messages: [{ role: "user", content: query }] },
      { configurable: { thread_id: "sahil-session-1" } }
    );

    const finalResponse = result.messages[result.messages.length - 1].content;
    console.log("\n--- Agent Answer ---\n", finalResponse);
  } catch (error) {
    console.error("\n[Error]:", error.message);
  }
};

runAgent("What is the current weather in delhi?");