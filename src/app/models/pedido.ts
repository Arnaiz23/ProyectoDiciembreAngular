export class Pedidos{
    constructor(
        public _id: string,
        public pedido: Array<any>,
        public id_usuario: string
    ){}
}

export class Pedido{
    constructor(
        public imagen: string,
        public nombre: string,
        public cantidad: string,
        public precio: string
    ){}
}