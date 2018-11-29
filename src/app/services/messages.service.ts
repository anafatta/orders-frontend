import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
  //ROOT_URL = 'http://lumasoft.dyndns.org:8000/api';
  
  SEND_MESSAGE_URL = '/message';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'

    })
};

  send(to: string, note: string){
    console.log("user: " +to + "     message:  " + message)
    let userId = sessionStorage.getItem('sellerId');
    var message = {
      from :userId,
      to: to,
      message: note
    }
   return this.httpClient.post(this.ROOT_URL + this.SEND_MESSAGE_URL, message, this.httpOptions);
  }
}
