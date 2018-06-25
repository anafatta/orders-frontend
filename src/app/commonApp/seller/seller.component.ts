import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellers : Seller[];
  isAdmin: boolean;
  selectedSeller: string;

  constructor(private userService : UserService) { }

  ngOnInit() {
    // call service to retrieve client by seller
    console.log('INIT!!! ... ');
    this.isAdmin = true;
    this.userService.getSellers().subscribe(( data: Seller[] ) => {
      this.sellers = data;
      console.log('sellers+ .. ' +this.sellers);
    });

    //this.sellers = ['Ana Fatta', 'Juan Perez' , 'Maria Lopez' ];

  }
  onClick(seller:string){
    console.log("click works ... " + seller);
  }

}

export interface Seller {
  id:number;
  nom:String;
}
