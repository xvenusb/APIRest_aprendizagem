import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        return user ?? null;

    }
async save(user: User): Promise<void> {
    this.users.push(user);        //"salvando" o usuário no banco de dados


}

}
