export interface IAddress {
    email: string;
    name: string;
}

export interface IMessage {
    to : IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail (mensage: IMessage): Promise<void>; //sempre que um método é assincrono ele retorna promisse<void>, pois não há retorno dentro da Promisse.
}