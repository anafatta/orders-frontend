import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdersService } from '../../services/orders.service';
import { Seller , OrderDetail , ItemDatum, Art, Variante, Peditem } from '../../models/models';




@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  orderDetail:OrderDetail;
  orderId: string;

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private orderService: OrdersService) { }

  ngOnInit() {
    console.log("on init");
    let id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id).subscribe((data : OrderDetail) => {
      this.orderDetail=data;
      console.log("Order Detail DATA: .." + data);
    });
    //this.getDataFake();

    console.log("Order Detail ORDER_DETAIL: .." + this.orderDetail);
 
}

getDataFake() {
  let client =  {
    "id":1,
    "nombre": "EL EMPORIO DE LOS SALDOS SACIFIA"
}
 let vend = {
   "id":1,
  "nom": "JUAREZ GABRIEL                                    "
}
let address =  {
  "id": 9788,
  "dir": "JUNIN 430                                         ",
  "localidad": "C.A.B.A.                      ",
  "codpos": "1026    ",
  "prov": "901"
}

let iDatum1: ItemDatum; 
let artic1: Art;
artic1 = {
  "codfac": "1660",
  "nom": "GABARDINA  1.40                           "
};
let varia1: Variante;
varia1 = {
  "codigo": "101             ",
  "nom": "101                                               "
}

iDatum1 ={
  "id": 20734,
  "art1":artic1 ,
  "variante": varia1
}
let iDatum2: ItemDatum; 
let artic2: Art;
artic2 = {
  "codfac": "1660",
  "nom": "CUERINA ESTAMPADA  1.40                           "
};

let varia2: Variante;
varia2 = {
  "codigo": "400             ",
  "nom": "400                                               "
}

iDatum2 = {
  "id": 20734,
  "art1":artic2 ,
  "variante": varia2
}

let ped1: Peditem;

ped1=  {
"itemdata": 123,
"can_ped": 12,
"can_aut": 10,
"pre_ped":34,
"pre_aut": 34,
"itemdatum": iDatum1,
}




let ped2: Peditem;

ped2 =  {
"itemdata": 5,
"can_ped": 75,
"can_aut": 75,
"pre_ped":40,
"pre_aut": 40,
"itemdatum": iDatum2,
} ;

let pItems : Peditem[];
 pItems = [ped1, ped2];

this.orderDetail = {
     'id': 3748,
    'nro': 3746,
    "fem": new Date("2017-09-12"),
    "ven": 37,
    "cli": 9692,
    "cliente": client,
    "vend": vend,
    "address": address,
    "peditms": pItems,
    };
}

}




