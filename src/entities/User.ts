import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public name: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
 
    //para criar uma nova entidade. preenchimento automático do usuário
    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
        }

    }
        
}
