import { User } from "../../../domain/User";
import { UserDTO } from "../../../domain/dto/UserDTO";
import { IUsersRepository } from "../interfaces/IUsersRepository";
import { UserModel } from "./schemas/User.schema";

export class UsersRepository implements IUsersRepository{
    async findAll(): Promise<UserDTO[]> {
        const usersModel = await UserModel.find();

        const users = usersModel.map((user) => 
            this.fromModelToDomain(user)
        );
        return users;
    }

    async save(user: User): Promise<UserDTO> {
        const { id, name , email, password, cpf, telefone} = user;
        const userModel = new UserModel({
            _id: id,
            name,
            email,
            password,
            cpf,
            telefone
        })

        await userModel.save();
        const newUser = await UserModel.findOne({ _id: id });

        return this.fromModelToDomain(newUser);
    }

    private fromModelToDomain(userModel: any): UserDTO{
        const { id, name , email, password, cpf, telefone} = userModel;
    
        return{
            id,
            name,
            email,
            password,
            cpf,
            telefone
        }
    }
}