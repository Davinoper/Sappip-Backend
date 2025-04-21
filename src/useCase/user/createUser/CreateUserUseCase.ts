import { User } from "../../../domain/User";
import { UserDTO } from "../../../domain/dto/UserDTO";
import { IUsersRepository } from "../../../infra/repositories/interfaces/IUsersRepository";

export class CreateUserUseCase{

    constructor(private usersRepository: IUsersRepository){}

    async execute(userDTO: UserDTO): Promise<UserDTO>{
        const user = User.create(userDTO);

        return await this.usersRepository.save(user);
    }
}