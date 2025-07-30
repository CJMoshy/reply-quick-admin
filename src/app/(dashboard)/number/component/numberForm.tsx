import { addNumber } from "../actions/numberActions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function NumberForm() {
    return (

        < form action={addNumber} >
            <h2 className="text-xl font-semibold mb-4 text-center border-b">Add A Number</h2>
            <Input
                type="text"
                name="phoneNumber"
                required
                pattern="^\+1\d{10}$"
                title="Phone number must be in the format +1XXXXXXXXXX"
                placeholder="+4151234567"
                className="w-full p-2.5 my-2 text-base border rounded-md"
            />
            <Button
                type="submit"
                className="w-full"
            >
                Save
            </Button>
        </form >

    )
}