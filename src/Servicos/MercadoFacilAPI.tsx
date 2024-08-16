import axios from 'axios';
import { LoginData } from '../Interfaces/LoginData';
import { Usuario } from '../Interfaces/Usuario';

const apiClient = axios.create({
    baseURL: 'http://localhost:5165/api',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const LoginAPI =(loginData: LoginData)=>{
    return apiClient.post('/Login/login', loginData)
}

export const CriarUsuario = (dadosUsuario: Usuario) =>{
    return apiClient.post('/UserController/AddUser', dadosUsuario)
}

export const AtualizarUsuario = (dadosUsuario: Usuario) =>{
    return apiClient.put('/UserController/UpdateUser', dadosUsuario)
}

export const DeletarUsuario = (id: string) =>{
    return apiClient.delete(`/UserController/DeleteUser/${id}`)
}

export const ListarUsuarios = () =>{
    return apiClient.get('/UserController/GetAll')
}