import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: AuthserviceService) { }
  msg: any;
  ngOnInit(): void {
  }
  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  logindata() {
    console.log(this.loginform.value);
    let userData = this.loginform.value;
    var output = this.service.checkusernameandpassword(userData.email, userData.password);
    if (output == true) {
      this.router.navigateByUrl('/home');
    }
    else {
      this.msg = 'Invalid username or Password';
    }
  }
  
  gotoregister() {
    this.router.navigateByUrl('/register');
  }
}
