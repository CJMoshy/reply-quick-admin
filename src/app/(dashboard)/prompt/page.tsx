import { fetchAgents } from "./actions/actions"
import Modal from "./component/modal"
export default async function Page() {
    const agents = await fetchAgents()
    console.log("Fetched agents:", agents)
    return (
        <div className="flex flex-col h-screen w-[70%] mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-center">Agent Prompt Editor</h1>
            </div>
            <div>
                <p className="mt-4 border-b ml-5">Agents</p>
            </div>
            <div className="mx-6 my-4">
                <ul>
                    {agents.map((agent) => (
                        <li key={agent.agent_id} className="m-2 p-2 border rounded hover:bg-gray-100">
                            <div className="flex justify-between items-center">
                                <div className="cursor-default">
                                    <span className="font-semibold">{agent.agent_name}</span>
                                    <p className="text-xs text-gray-500">{agent.agent_id}</p>
                                    <p className="text-sm text-gray-600">{agent.voice_id}</p>
                                </div>
                                <div className="mr-5">
                                    <Modal agent={agent} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}