import { EntidadeBase } from "./EntidadeBase";

export interface Endereco {
    dadosEntidade: EntidadeBase | null,
    street: string | null,
    number: string | null,
    complement: string | null,
    neighborhood: string | null,
    city: string | null,
    state: string | null,
    country: string | null,
    zipCode: string | null,
    district: string | null
}