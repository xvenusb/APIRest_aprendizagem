import { mailtrapMailProvider } from "../../providers/implementations/mailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/repoImplementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

// Instanciar provedores e repositórios
const mailtrapMailProviderInstance = new mailtrapMailProvider();
const postgresUsersRepositoryInstance = new PostgresUsersRepository();

// Criar caso de uso
const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepositoryInstance,
    mailtrapMailProviderInstance,
);

// Criar controlador
const createUserController = new CreateUserController(createUserUseCase); 

// Exportar as instâncias
export { createUserUseCase, createUserController };
