import { Endereco } from "./Endereco";
import { EntidadeBase } from "./EntidadeBase";
import { UserAddress } from "./UserAddress";

export interface Usuario {
    dadosEntidade: EntidadeBase | null,
    enderecos: Array<Endereco>,
    usuarioEndereco: Array<UserAddress>,
    name: string | null,
    email: string | null,
    password: string | null,
    role: string | null
}