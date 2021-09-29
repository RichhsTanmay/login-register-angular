import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateModule } from './template/template.module';
import { UserModule } from './user/user.module';
import { AuthGuard } from './auth.guard';
import { AuthserviceService } from './authservice.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TemplateModule,
    UserModule
  ],
  providers: [AuthGuard, AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
