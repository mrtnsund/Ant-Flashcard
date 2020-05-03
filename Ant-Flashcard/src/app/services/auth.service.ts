import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { IUser } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  configUrl = 'http://localhost:3001/user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) {

  }

  register(user: IUser) {
    return this.http.post(`${this.configUrl}/signup`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.router.navigate(['/home']);
      });
  }

  login(user: IUser) {
    return this.http.post<any>(`${this.configUrl}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.router.navigate(['/home']);
      });
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') === null) {
      this.router.navigate(['/login']);
    }
  }

  public isAuthenticated(): boolean {
    const userData = localStorage.getItem('userInfo');
    if (userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = `Client Error: ${error.error.message}`;
    } else {
      msg = `Server Error code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
