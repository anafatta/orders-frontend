import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
  // ROOT_URL = 'http://localhost.:8000/api';

  Auth = '/login';
  ChangePass = '/changepass';

  login(username: string, password: string) {
    return this.http.post<any>(this.ROOT_URL + this.Auth, { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }
  changePassword(user: string, oldpassword: string, newpassword: string) {
    return this.http.put<any>(this.ROOT_URL + this.ChangePass, { username: user, newpassword: newpassword, oldpassword: oldpassword });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('sellerId');
    localStorage.removeItem('sellerIdMaster');
  }
}
