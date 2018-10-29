
export interface Seller {
  id: number;
  nom: String;
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
  nombre: string;
  nom: string;
  cuit: string;
  codfac: number;
  razonsoc: string;
  address: Address[];
  salesman: string;
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


export interface DetalleArticulo {
  art_id: number;
  nom: string;
  variantes: Variante[];
}



export interface Flete {
  id: number;
  nom: string;
}
