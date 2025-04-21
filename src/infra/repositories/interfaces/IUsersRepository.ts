import { User } from "../../../domain/User";
import { UserDTO } from "../../../domain/dto/UserDTO";

export interface IUsersRepository{
    findAll(): Promise<UserDTO[]>;
    save(user: User): Promise<UserDTO>;
}