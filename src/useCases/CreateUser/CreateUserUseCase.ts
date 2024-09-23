import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
export class CreateUserUseCase {
    
   constructor(
    private usersRepository: IUsersRepository
    
   ){}
   
    async execute(data: ICreateUserRequestDTO) { //dados sendo recebidos da requisição

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        
        if (userAlreadyExists) {
            throw new Error('Usuário já existente.');
        }

        const user = new User(data);
        
        await this.usersRepository.save(user); //chamando o repositório, salvando o usuário no banco de dados.


    }
}