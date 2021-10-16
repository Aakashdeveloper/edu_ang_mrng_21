export class IUser{
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public phone: number,
        public codelang: string
    ){}
}