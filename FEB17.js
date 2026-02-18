import { createAgent } from 'langchain'
import { ChatOllama } from '@langchain/ollama'
import { TavilySearch } from '@langchain/tavily';

const accessInternet = new TavilySearch({
    maxResults: 5,
    topic: "news",
    searchDepth: "advanced",
    tavilyApiKey: "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"
})

let ollama = new ChatOllama({
    model: "qwen2.5:7b",
    temperature : 0.1
})

let agent = createAgent({
    model: ollama,
    tools : [accessInternet]
})

const run = async () => {
    try {
        let response = await agent.invoke({
            role: "user",
            messages: ⁠ Use the ${accessInternet} tool What was the result of ind vs pak match held on feb 15 2026? ⁠,
        })

        console.log(response.messages[1].content);
    } catch (e) {
        console.error(e)
    }
}

run()