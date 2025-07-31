"use server"

import RetellService from "@/lib/retell"
import { AgentResponse } from "retell-sdk/resources.mjs"

export async function fetchAgents() {
    const agents = await RetellService.instance.getAgents()
    const unique = new Map<string, AgentResponse>()
    agents.forEach(agent => {
        if (!unique.has(agent.agent_id)) {
            unique.set(agent.agent_id, agent)
        }
    })
    return Array.from(unique.values())
}

export async function fetchLLM(llmId: string) {
    const llm = await RetellService.instance.getLLM(llmId)
    if (!llm) {
        throw new Error(`LLM with ID ${llmId} not found`)
    }
    return llm
}

export async function updatePrompt(formdata: FormData) {
    const prompt = formdata.get("prompt")
    const llmId = formdata.get("llmId")
    console.log(prompt, llmId)
}