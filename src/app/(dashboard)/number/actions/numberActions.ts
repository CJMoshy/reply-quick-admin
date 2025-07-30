"use server";

import { revalidatePath } from "next/cache";
import { PhoneNumber } from "..";


export async function addNumber(formData: FormData) {
    const phoneNumber = formData.get("phoneNumber") as string;

    if (!phoneNumber) {
        throw new Error("Phone number is required");
    }

    const response = await fetch(process.env.PHONE_API_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "key": process.env.PHONE_API_KEY || ""
        },
        body: JSON.stringify({ phoneNumber })
    });

    console.log("Response from API:", response);
    if (!response.ok) {
        throw new Error("Failed to add number");
    }

    revalidatePath("/number");
}

export async function deleteNumber(number: string) {
    const response = await fetch(`${process.env.PHONE_API_URL!}/${number}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "key": process.env.PHONE_API_KEY || ""
        }
    });

    if (!response.ok) {
        throw new Error("Failed to delete number");
    }

    revalidatePath("/number");
}

export async function getNumbers() {

    const response = await fetch(process.env.PHONE_API_URL! + '/all', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch numbers");
    }

    const data = await response.json();
    return data as PhoneNumber[];
}