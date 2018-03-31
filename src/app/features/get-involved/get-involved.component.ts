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
    this.menuNavItems.push(new MenuNavItem('Volunteers', 'volunteer'));
    this.menuNavItems.push(new MenuNavItem('Families', 'families'));
    this.menuNavItems.push(new MenuNavItem('Athletes', 'become-athlete'));
    this.menuNavItems.push(new MenuNavItem('Coaches and Officials', 'coaches'));
  }
}
