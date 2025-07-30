
type UUID = string & { readonly brand: unique symbol };

export interface PhoneNumber {
    id: UUID;
    phoneNumber: string;
    status: boolean
}