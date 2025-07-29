import { PhoneNumber } from ".."
import { deleteNumber } from "../actions/numberActions";
import { Button } from "@/components/ui/button";
interface NumbersListProps {
    numbers: PhoneNumber[];
}
export default function NumbersList({ numbers }: NumbersListProps) {

    const formatPhoneNumber = (phone: string): string => {
        if (phone === null || phone === undefined) return 'Loading...';
        const match = phone.match(/^\+1(\d{3})(\d{3})(\d{4})$/);
        if (!match) throw new Error("Invalid phone number format");
        const [, area, prefix, line] = match;
        return `+1 (${area})-${prefix}-${line}`;
    };

    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Existing Numbers</h3>
            <ul className="list-none p-0">
                {numbers.map((number) => (
                    <li key={number.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span>{formatPhoneNumber(number.phoneNumber)}</span>
                        <span className={`text-sm ${number.status ? 'text-green-600' : 'text-red-600'} p-2`}>
                            {number.status ? 'Available' : 'Taken'}
                        </span>
                        <Button
                            className="hover:bg-red-600 text-white px-3 py-1.5 rounded-md cursor-pointer"
                            onClick={deleteNumber.bind(null, number.phoneNumber)}
                        >
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </div>)
}