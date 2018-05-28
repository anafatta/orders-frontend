import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store<any>) { }

 getAllStates(){
    return this.store.select('appReducer');
  }
}
