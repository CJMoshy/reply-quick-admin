
import { getNumbers } from "./actions/numberActions"
import NumbersList from "./component/numberList";
import NumberForm from "./component/numberForm";
export default async function Page() {
    const numbers = await getNumbers();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <NumberForm />
            <NumbersList numbers={numbers} />
        </div>
    )
}