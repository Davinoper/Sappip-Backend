import { v4 } from 'uuid';
import { Entity } from './Entity';
import { UserDTO } from './dto/UserDTO';

export class User extends Entity{
    public name: string;
    public email: string;
    public password: string;
    public cpf: string;
    public telefone: string;

    private constructor(
        name: string,
        email: string, 
        password: string, 
        cpf: string, 
        telefone: string,  
        id?: string
    ){
        super(id);
        this.name = name;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.telefone =telefone;
    }

    static create(userDTO: UserDTO): User{
        const { id, name , email, password, cpf, telefone} = userDTO;
        try{
            return new User(
                name!,
                email!,
                password!,
                cpf!,
                telefone!,
                id
            )
        }catch(error){
            throw new Error('Erro ao criar Usuário')
        }
        
    }


}