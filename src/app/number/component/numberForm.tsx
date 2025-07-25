import { addNumber } from "../actions/numberActions"
export default function NumberForm() {
    return (
        <form className="w-[400px] bg-white p-6 rounded-xl shadow-md mx-auto" action={addNumber}>
            <h2 className="text-xl font-semibold mb-4 text-center">Add Numbers</h2>
            <input
                type="text"
                name="phoneNumber"
                required
                pattern="^\+1\d{10}$"
                title="Phone number must be in the format +1XXXXXXXXXX"
                placeholder="+4151234567"
                className="w-full p-2.5 my-2 text-base border rounded-md"
            />
            <button
                type="submit"
                className="w-full py-2.5 mt-2 bg-gray-700 text-white font-bold border-none rounded-md hover:bg-black transition-colors duration-300"
            >
                Save
            </button>
        </form>
    )
}