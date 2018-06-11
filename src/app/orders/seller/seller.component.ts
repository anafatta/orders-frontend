import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  clients : string[];

  constructor() { }

  ngOnInit() {
    // call service to retrieve client by seller
    this.clients = ['Ana Fatta', 'Juan Perez' , 'Maria Lopez' ];

  }
  onClick(){
    console.log("click works");
  }

}
