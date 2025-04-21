import { UserDTO } from "../../../domain/dto/UserDTO";
import { IUsersRepository } from "../../../infra/repositories/interfaces/IUsersRepository";

export class GetAllUsersUseCase{

    constructor(private usersRepository: IUsersRepository){}
    
    async execute(): Promise<UserDTO[]>{

        return await this.usersRepository.findAll();
    }
}