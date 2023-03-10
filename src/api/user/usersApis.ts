import { Router, response } from "express"
import {Request, Response } from 'express';
import { createUserController } from "./createUser";
import { getAllUsersController } from "./GetAllUsers";

const userApis = Router();

userApis.post('/users', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

userApis.get('/users', (request: Request, response: Response) =>{
  return getAllUsersController.handle(request, response);
});

export{ userApis }