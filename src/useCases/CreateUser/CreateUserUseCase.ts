import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
export class CreateUserUseCase {
    
   constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
    
   ){}
   //não depende da implementação direta, mas sim da abstração(interface) da aplicaçaõ

    async execute(data: ICreateUserRequestDTO) { //dados sendo recebidos da requisição

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        
        if (userAlreadyExists) {
            throw new Error('Usuário já existente.');
        }

        const user = new User(data);
        
        await this.usersRepository.save(user); //chamando o repositório, salvando o usuário no banco de dados.

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe da minha aplicação',
                email: 'team@minhaplicacao.com',
            },
            subject: 'Seja bem-vindo(a) à plataforma',
            body: '<p> Você já pode fazer login em nossa plataforma.</p>'
        })
    }
}       //Single Responsability Principle (SRP). 

        //Esta classe têm como *única* responsabilidade a criação do usuário.