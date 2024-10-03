import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public name: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
 
    //para criar uma nova entidade. preenchimento automático do usuário
    constructor(props: Omit<User, 'id'>, id?: string) { //O parâmetro props contém todas as propriedades do objeto User, exceto o id.
        
        Object.assign(this, props); //A função Omit é uma utility type que permite criar um novo tipo a partir de outro, removendo certas chaves (neste caso, a chave 'id').

        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
        }

    }
        
}
