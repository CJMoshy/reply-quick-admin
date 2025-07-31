import Retell from "retell-sdk";

export default class RetellService {

    client: Retell;

    static #instance: RetellService;

    private constructor() {
        this.client = new Retell({ apiKey: process.env.RETELL_API_KEY || "" });
    }

    public static get instance(): RetellService {
        if (!RetellService.#instance) {
            RetellService.#instance = new RetellService();
        }
        return RetellService.#instance;
    }

    public async getAgents() {
        try {
            const agents = await this.client.agent.list()
            return agents;
        } catch (error) {
            console.error("Error fetching agents:", error);
            throw error;
        }
    }

    public async getLLM(llmId: string) {
        try {
            const llm = await this.client.llm.retrieve(llmId);
            if (!llm) {
                throw new Error(`LLM with ID ${llmId} not found`);
            }
            return llm;
        } catch (error) {
            console.error("Error fetching LLM:", error);
            throw error;
        }
    }
}