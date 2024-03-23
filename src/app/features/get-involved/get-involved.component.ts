import { Component, OnInit } from '@angular/core';
import { MenuNavItem } from '../../menu/menu-nav-item';

@Component({
  selector: 'soci-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.less']
})
export class GetInvolvedComponent implements OnInit {
  menuNavItems: MenuNavItem[] = [];
  constructor() { }

  ngOnInit() {
    this.setMenuNavItems();
  }

  private setMenuNavItems() {
    this.menuNavItems.push(new MenuNavItem('Coaches', 'coaches'));
    this.menuNavItems.push(new MenuNavItem('Volunteers', 'volunteers'));
    this.menuNavItems.push(new MenuNavItem('Athletes', 'athletes'));
    this.menuNavItems.push(new MenuNavItem('Families', 'families'));
  }
}
