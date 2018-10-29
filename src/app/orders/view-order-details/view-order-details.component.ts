import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdersService } from '../../services/orders.service';
import { Seller, OrderDetail, ItemDatum, Art, Variante, Peditem, ImgInfo } from '../../models/models';
import { ImageService } from 'src/app/services/image.service';
import { stringify } from '@angular/compiler/src/util';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface ViewOrderDetails {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  orderDetail: OrderDetail;
  imgUrl: ImgInfo;
  orderId: string;
  articulos: Art[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService: OrdersService,
    private imgService: ImageService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): any {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id).subscribe((data: OrderDetail) => {
      this.orderDetail = data;
      console.log('Order Detail DATA: ..' + data);
    });
    // this.getProdPict(105, 100);
  }
  getProdPict(cod, col) {
    return this.imgService.getImg(cod, col).subscribe((img: ImgInfo) => {
      this.imgUrl = img;
      console.log('Image URL ' + img);
    });
  }
}
export class ViewOrderDetails implements AfterViewInit {
  imgUrl: ImgInfo;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService: OrdersService,
    private imgService: ImageService
  ) { }

  ngAfterViewInit() {
    this.getProdPict(100, 100);
  }
  getProdPict(cod, col) {
    this.imgService.getImg(cod, col).subscribe((img: ImgInfo) => {
      this.imgUrl = img;
      console.log('Image URL ' + img);
    });
  }
}



