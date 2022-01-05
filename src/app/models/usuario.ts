export class Usuario{
    constructor(
        public _id: string,
        public usuario: string,
        public password: string,
        public tipo: string,
        public nombre: string,
        public apellidos: string,
        public correo: string,
        public direcciones: Array<any>
    ){}
}