import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AccountsService } from '../../services/accounts.service';
import { OtherdataService } from '../../services/otherdata.service';
import { Det0} from '../../models/models';

export interface ViewAccountsDetailDocs {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-view-accounts-detail',
  templateUrl: './view-accounts-detail.component.html',
  styleUrls: ['./view-accounts-detail.component.css'],
  providers: [AccountsService]
})
export class ViewAccountsDetailComponent implements OnInit {
  accountsDetail: Det0;
  accountsId: string;
  address: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private accountsService: AccountsService,
    private odService: OtherdataService) { }

  ngOnInit() {


  }

}
