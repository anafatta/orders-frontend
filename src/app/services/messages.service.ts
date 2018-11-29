import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
  //ROOT_URL = 'http://lumasoft.dyndns.org:8000/api';
  
  SEND_MESSAGE_URL = '/message';
  GET_MESSAGE_URL = '/api/messages/';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'

    })
};

  send(to: string, note: string){
    
    let user =  JSON.parse(localStorage.getItem('currentUser'));
    console.log("user: " +to + "     message:  " + note + "from user: " + user.userId)
    var message = {
      from :user.userId,
      to: to,
      message: note
    }
   return this.httpClient.post(this.ROOT_URL + this.SEND_MESSAGE_URL, message, this.httpOptions);
  }
  
  get(): Observable<Message[]> {    
    let user =  JSON.parse(localStorage.getItem('currentUser'));
    return this.httpClient.get<Message[]>(this.ROOT_URL + this.GET_MESSAGE_URL + user.userId , this.httpOptions);
  }
}
