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
    this.menuNavItems.push(new MenuNavItem('Volunteer', 'volunteer'));
    this.menuNavItems.push(new MenuNavItem('Unified Sports', 'unified-sports'));
    this.menuNavItems.push(new MenuNavItem('Become An Athlete', 'become-athlete'));
    this.menuNavItems.push(new MenuNavItem('Become a Coach or Official', 'become-coach'));
  }
}
