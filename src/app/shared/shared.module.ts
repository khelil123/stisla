import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Layouts/footer/footer.component';





@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
  NavbarComponent,
  SidebarComponent,
  FooterComponent  
  ]
})
export class SharedModule { }
