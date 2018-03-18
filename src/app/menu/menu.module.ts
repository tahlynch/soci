import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuStickyDirective } from './menu-sticky.directive';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [MenuComponent, MenuMobileComponent, MenuStickyDirective],
  exports: [MenuComponent, MenuMobileComponent, MenuStickyDirective]
})
export class MenuModule { }
