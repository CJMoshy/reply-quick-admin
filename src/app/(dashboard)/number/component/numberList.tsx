import { PhoneNumber } from ".."
import { deleteNumber } from "../actions/numberActions";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    X,
    Check,
    Trash2
} from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

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
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 text-left">Number</th>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Availability</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {numbers.map((number) => (
                            <tr key={number.id}>
                                <td className="py-2 px-4">{formatPhoneNumber(number.phoneNumber)}</td>
                                <td className="py-2 px-4">{number.userName || '-'}</td>
                                <td className="py-2 px-4">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            {number.status ? <Check className="text-green-600" /> : <X className="text-red-600" />}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {number.status ? 'Available' : 'Taken'}
                                        </TooltipContent>
                                    </Tooltip>
                                </td>
                                <td className="py-2 px-4">
                                    <Popover>
                                        <PopoverTrigger ><Trash2 className="cursor-pointer" /></PopoverTrigger>
                                        <PopoverContent>
                                            <p className="text-center font-semibold">Are You Sure?</p>
                                            <Button
                                                className="hover:bg-red-600 text-white px-3 py-1.5 rounded-md cursor-pointer w-full mt-2"
                                                onClick={deleteNumber.bind(null, number.phoneNumber)}
                                            >
                                                Confirm
                                            </Button>
                                        </PopoverContent>
                                    </Popover>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}