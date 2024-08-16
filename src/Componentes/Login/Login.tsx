import { useState } from "react";
import { LoginData } from "../../Interfaces/LoginData";
import { LoginAPI } from "../../Servicos/MercadoFacilAPI";
const Login = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    });

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const  handleSubmit = async (event: React.MouseEventHandler<HTMLButtonElement> | any) =>{
            event.preventDefault();
            try{
                const response = await LoginAPI(loginData);
                if (response.data && response.status === 200){
                    alert('Login realizado com sucesso');
                    sessionStorage.setItem('token', response.data.token);
                    const testeRecuperaDado = sessionStorage.getItem('token');
                    alert('Dado Recuperado do session storage: ' + testeRecuperaDado);
                }
                else{
                    alert('Falha no login');
                }
            }
            catch (e){
                       console.error('Falha no login' + e.message);
            }
        }

    return (
        <>
        <div className="LoginForm">
            <div className="LoginInputs">
                <form>
                    <div>
                        <input
                            type="text"
                            name="email"
                            value={loginData.email}                            
                            onChange = {handleLogin}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange = {handleLogin}
                        />
                    </div>
                    <button className="buttonMargin" onClick={handleSubmit}>Entrar</button>
                </form>
            </div>
        </div>
        </>
    );
}
export default Login;