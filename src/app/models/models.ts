
export interface Seller {
    id:number;
    nom:String;
  }

  export interface OrderDetail {
    id: number;
    nro: number;
    fem: Date;
    ven: number;
    cli:number;
    //  "precio": "0.000",
  //  "articulo": 0,
    cliente: Cliente;
    vend: Seller;
    address : Address; 
    peditms: Peditem[];
  
  
  }

 export interface Order {
    id: number;
    nro:number;
    fem:Date;
    cliente: Cliente;
    vend: Seller;
    address: Address;
  
  }
  
  export interface Cliente {
    id:number;
    nombre:string;
  }
  
  export interface Address {
    id:number;
    dir:string;
    localidad:string;
    codpos:string;
    prov:string;
  } 
  
  export interface Variante {
    codigo: string;
    nom: string;
  }
  
  export interface Peditem {
    itemdata: number;
    can_ped: number;
    can_aut: number;
    pre_ped:number;
    pre_aut: number;
    itemdatum: ItemDatum;
  }
  
  export interface ItemDatum {
  id: number;
  art1:Art;
  variante: Variante;
  }  
  
  export interface Art {
    codfac: string;
    nom: string;
  }
  