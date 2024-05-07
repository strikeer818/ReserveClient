import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginResult } from './login-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(protected http : HttpClient) { }

  public tokenKey : string = "tokenKey";
  private _authStatus = new BehaviorSubject<boolean>(false);
  public authStatus = this._authStatus.asObservable();

  isAuthenticated() : boolean {
    return this.getToken() !== null;
  }

  getToken() : string | null {
    return localStorage.getItem(this.tokenKey);
  }

  init(): void {
    if (this.isAuthenticated()) {
      this.setAuthStatus(true);
    }
  }

  login(item : LoginRequest) : Observable<LoginResult> {
    let url = `${environment.baseUrl}api/Admin/Login`;
    return this.http.post<LoginResult>(url, item).pipe(tap(loginResult => {
      if(loginResult.success) {
        localStorage.setItem(this.tokenKey, loginResult.token)
      }
    }));
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.setAuthStatus(false);
  }

  private setAuthStatus(isAuthenticated: boolean): void {
    this._authStatus.next(isAuthenticated);
  }
  
}