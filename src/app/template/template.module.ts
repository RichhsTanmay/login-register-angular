import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProjectsComponent,
    ContactComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class TemplateModule { }
