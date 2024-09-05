/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, useFieldArray } from 'react-hook-form';
import { CriarUsuario } from '../../Servicos/MercadoFacilAPI';

const UserForm = () => {
    const { register, handleSubmit, control } = useForm()
    const {fields, append, remove} = useFieldArray({
        control,
        name: "addresses"
    });
    const onSubmit = (data: any) => {
        console.log(data);
        try {
           CriarUsuario(data);
        }
        catch (error) {
            console.error(error);
        }        
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Dados de acesso do usuário</h2>
                <div>
                    <label>Nome: </label>
                    <input type="text" {...register("name")} required/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" {...register("email")} required/>
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" {...register("password")} required/>
                </div>
                <div>
                    <label>Role: </label>
                    <input type="text" {...register("role")} required/>
                </div>
                <br/>
                <h2>Endereços</h2>
                {fields.map((field, index) => (
                    <div key={field.id}>
                        <div>
                            <label>Rua: </label>
                            <input type="text" {...register(`addresses[${index}].street`)} required/>
                        </div>
                        <div>
                            <label>Número: </label>
                            <input type="text" {...register(`addresses[${index}].number`)} required/>
                        </div>
                        <div>
                            <label>Complemento: </label>
                            <input type="text" {...register(`addresses[${index}].complement`)} required/>
                        </div>
                        <div>
                            <label>Vizinhança: </label>
                            <input type="text" {...register(`addresses[${index}].neighborhood`)} required/>
                        </div>
                        <div>
                            <label>Cidade: </label>
                            <input type="text" {...register(`addresses[${index}].city`)} required/>
                        </div>
                        <div>
                            <label>Estado: </label>
                            <input type="text" {...register(`addresses[${index}].state`)} required/>
                        </div>
                        <div>
                            <label>País: </label>
                            <input type="text" {...register(`addresses[${index}].country`)} required/>
                        </div>
                        <div>
                            <label>CEP: </label>
                            <input type="text" {...register(`addresses[${index}].zipCode`)} required/>
                        </div>
                        <div>
                            <label>Bairro: </label>
                            <input type="text" {...register(`addresses[${index}].district`)} required/>
                        </div>
                        <button type="button" onClick={() => remove(index)}>Remover Endereço</button>
                    </div>
                ))}
                <button type="button" onClick={() => append({})}>Adicionar Endereço</button>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default UserForm;