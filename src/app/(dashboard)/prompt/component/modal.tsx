import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Pen } from "lucide-react"
import Retell from "retell-sdk"
import { fetchLLM, updatePrompt } from "../actions/actions"

function isRetellLLM(
    engine: Retell.AgentResponse["response_engine"]
): engine is Extract<Retell.AgentResponse["response_engine"], { type: "retell-llm" }> {
    return engine.type === "retell-llm";
}

export default async function Modal({ agent }: { agent: Retell.AgentResponse }) {
    if (isRetellLLM(agent.response_engine)) {
        const llmId = agent.response_engine.llm_id;
        const llm = await fetchLLM(llmId);
        return (
            <Dialog>
                <DialogTrigger className="hover:border-b hover:border-black"><Pen /></DialogTrigger>
                <DialogContent className="w-[full] max-h-[90vh] p-6 overflow-hidden">
                    <DialogHeader>
                        <DialogTitle>Edit Agent Prompt</DialogTitle>
                        <DialogDescription>
                            Edit the prompt below to modify the current agents prompt
                        </DialogDescription>
                    </DialogHeader>
                    <form action={updatePrompt}>
                        <input type="hidden" name="llmId" value={llmId} />
                        <Textarea name="prompt" defaultValue={llm.general_prompt || ""} className="h-60 overflow-y-auto resize-none" />
                        <Button className="w-full mt-2" type="submit">Update</Button>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }
    return (
        <div>Invalid LLm Id for Agent. This should not happen</div>
    )
}