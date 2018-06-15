import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellers : string[];
  isAdmin: boolean;
  selectedSeller: string;

  constructor() { }

  ngOnInit() {
    // call service to retrieve client by seller
    this.isAdmin = true;
    this.sellers = ['Ana Fatta', 'Juan Perez' , 'Maria Lopez' ];

  }
  onClick(seller:string){
    console.log("click works ... " + seller);
  }

}
