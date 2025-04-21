import { Request, Response } from "express";
import { UsersRepository } from "../../../infra/repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "../../../useCase/user/createUser/CreateUserUseCase";

export class CreateUserController{
    private userUseCase: CreateUserUseCase;

    constructor(){
        this.userUseCase = new CreateUserUseCase(
            new UsersRepository()
        );
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const userDTO = request.body;

        try{
            const user = await this.userUseCase.execute(userDTO);

            return response.status(201).json({ message: 'Usuário criado com sucesso! ', user});
        } catch(error){
            return response.status(400).json({ message: error.message ||
                 'Algo deu errado ao criar o usuário'
            })
        }
    }

}