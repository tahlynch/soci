import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule } from './sidenav/sidenav.module';
@NgModule({
  imports: [
    CommonModule,
    SidenavModule
  ],
  exports: [SidenavModule],
  declarations: []
})
export class NavigationModule { }
