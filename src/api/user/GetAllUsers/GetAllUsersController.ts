import { UsersRepository } from "../../../infra/repositories/implementations/UsersRepository";
import { GetAllUsersUseCase } from "../../../useCase/user/getAllUsers/GetAllUsersUseCase";
import { Request, Response } from "express";

export class GetAllUsersController{
    private userUseCase: GetAllUsersUseCase;

    constructor(){
        this.userUseCase = new GetAllUsersUseCase(
            new UsersRepository()
        );
    }

    async handle(request: Request, response: Response): Promise<Response>{
        try{
            const users = await this.userUseCase.execute();

            return response.status(200).json({users});
        } catch( error ){
            return response.status(400).json({ message: error.message ||
                'algo deu errado ao buscar os usuários'
            });
        }
    }
}