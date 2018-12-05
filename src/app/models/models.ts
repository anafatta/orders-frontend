
export interface Seller {
  id: number;
  nom: string;
}
export interface ImgInfo {
  codigo: string;
  color: string;
  img_url: string;
}

export interface OrderDetail {
  id: number;
  nro: number;
  fem: Date;
  ven: number;
  cli: number;
  conven: string;
  observ: string;
  cliente: Cliente;
  vend: Seller;
  address: Address;
  clidir: number;
  peditms: Peditem[];

}

export interface Order {
  id: number;
  nro: number;
  fem: Date;
  cliente: Cliente;
  vend: Seller;
  address: Address;

}

export interface Cliente {
  id: number;
  codnom: string;
  nombre: string;
  nom: string;
  cuit: string;
  codfac: number;
  razonsoc: string;
  address: Address[];
  salesman: string;
}

export interface Provincia {
  id: number;
  nom: string;
}

export interface CustomersDetail {
  id: number;
  nombre: string;
  nom: string;
  cuit: string;
  codfac: number;
  razonsoc: string;
  address: Address[];
}

export interface Address {
  id: number;
  dir: string;
  localidad: string;
  codpos: string;
  prov: string;
  flete: Flete;
}

export interface Variante {
  itemdata_id: number;
  codigo: string;
  nom: string;
  pza: number;
}

export interface Peditem {
  itemdata: number;
  can_ped: number;
  can_aut: number;
  pre_ped: number;
  pre_aut: number;
  itemdatum: ItemDatum;
}

export interface ItemDatum {
  id: number;
  art1: Art;
  variante: Variante;
}

export interface Art {
  id: number;
  codfac: string;
  nom: string;
}
export interface Expreso {
  id: number;
  nom: string;
  dir: string;
  localidad: string;
  codpos: number;
  prov: number;
  cuit: number;
  tel: string;
  horario: string;
}

export interface DetalleArticulo {
  id: number;
  art_id: number;
  nom: string;
  variantes: Variante[];
}


export interface Flete {
  id: number;
  nom: string;
}

export interface Precio {
  precio: number;
}

// Condición de pago
export interface CondicionPago {
  id: number;
  nom: string;
  descuento: number;
  incremento: number;

}
export interface User {
  nro: number;
  firstname: string;
  lastname: string;

}
export interface Message {
  _id: number;
  fromUser: string;
  fromName: String;
  toUser: string;
  toName: String;
  message: string;
  createdD: Date;

}

export interface Doc {
  docs : Message[];
}