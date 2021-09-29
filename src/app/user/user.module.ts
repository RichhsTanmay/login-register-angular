import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigateComponent } from './navigate/navigate.component';
import { UserRoutingModule } from './user-routing.module';
import { AuthserviceService } from './../authservice.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavigateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  providers: [AuthserviceService]
})
export class UserModule { }
