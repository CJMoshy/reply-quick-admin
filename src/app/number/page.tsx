
import { getNumbers } from "./actions/numberActions"
import NumbersList from "./component/numberList";
import NumberForm from "./component/numberForm";
import Link from "next/link";
export default async function Page() {
    const numbers = await getNumbers();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold mb-6">Manage Phone Numbers</h1>
            <Link href="/" className="text-blue-500 hover:underline mb-4">
                Back to Home
            </Link>
            <NumberForm />
            <NumbersList numbers={numbers} />
        </div>
    )
}