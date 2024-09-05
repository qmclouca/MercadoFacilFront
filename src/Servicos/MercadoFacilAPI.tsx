import axios from 'axios';
import { LoginData } from '../Interfaces/LoginData';
import { Usuario } from '../Interfaces/Usuario';

const apiClient = axios.create({
    baseURL: 'https://xd1520lj-5165.brs.devtunnels.ms/api',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const LoginAPI =(loginData: LoginData)=>{
    return apiClient.post('/Login/login', loginData)
}

export const CriarUsuario = (dadosUsuario: Usuario) =>{
    return apiClient.post('/User', dadosUsuario)
}

export const AtualizarUsuario = (dadosUsuario: Usuario) =>{
    return apiClient.put('/User/UpdateUser', dadosUsuario)
}

export const DeletarUsuario = (id: string) =>{
    return apiClient.delete(`/UserController/DeleteUser/${id}`)
}

export const ListarUsuarios = () =>{
    return apiClient.get('/UserController/GetAll')
}