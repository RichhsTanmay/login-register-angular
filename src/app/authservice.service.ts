import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  
  checkusernameandpassword(uname: string, p: string) {
    if (uname == "aman" && p == "123") {
      localStorage.setItem('username', "aman");
      return true;
    }
    else {
      return false;
    }
  }
}

