"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";

export default function AssignNumberForm() {
    const [numbers, setNumbers] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [selectedNumber, setSelectedNumber] = useState("");

    const users = [
        { userEmail: "ganesh@gmail.com" },
        { userEmail: "alice@gmail.com" },
        { userEmail: "bob@gmail.com" }
    ];
    useEffect(() => {
    fetch("/api/assign")
        .then(res => res.json())
        .then(setNumbers);
}, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // You can call your assignNumber action here or do a fetch/PATCH as needed
        // Example: await assignNumber(selectedUser, selectedNumber);
        // For now, just log
        console.log("Assign", selectedUser, selectedNumber);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-8">
            <h1 className="text-xl font-semibold mb-4 text-center border-b">Assign Number</h1>
            <label>
                User Email
                <Combobox
                    options={users.map((user: any) => ({
                        value: user.userEmail,
                        label: user.userEmail
                    }))}
                    value={selectedUser}
                    onChange={setSelectedUser}
                    placeholder="Select user email"
                    className="mb-2"
                />
            </label>
            <label>
                Available Number
                <Combobox
                    options={numbers.map((num: any) => ({
                        value: num.phoneNumber,
                        label: num.phoneNumber
                    }))}
                    value={selectedNumber}
                    onChange={setSelectedNumber}
                    placeholder="Select number"
                    className="mb-2"
                />
            </label>
            <Button type="submit" className="w-full" disabled={!selectedUser || !selectedNumber}>
                Link Phone Number
            </Button>
        </form>
    );
}