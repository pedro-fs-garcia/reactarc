import { globalInfo } from "@/data/globalInfo"

type Adress = {
    city: string,
    state: string,
    street: string,
    number: string,
    complement: string,
}

export function formatAddress() {
    const { city, state, street, number, complement }: Adress = globalInfo.address;
    return `
        ${street}, ${number}, ${complement} - 
        ${city} - ${state}

    `
}