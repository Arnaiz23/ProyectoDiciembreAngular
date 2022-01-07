export class Producto{
    constructor(
        public _id: string,
        public imagen: string,
        public nombre: string,
        public marca: string,
        public tipo: string,
        public descripcionCorta: string,
        public descripcion: string,
        public precio: number,
        public deporte: string,
        public disponibilidad: string,
        public date: any
    ){}
}