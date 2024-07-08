import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storage: any = localStorage.getItem('user');
  loggedUser = JSON.parse(this.storage);
  
  isAdmin(): boolean {
    return this.loggedUser?.role === 0;
  }

  isVendor(): boolean {
    return this.loggedUser?.role === 1;
  }
}
