import { Component, OnInit } from '@angular/core';
import { MenuNavItem } from '../../menu/menu-nav-item';

@Component({
  selector: 'soci-giving',
  templateUrl: './giving.component.html',
  styleUrls: ['./giving.component.less']
})
export class GivingComponent implements OnInit {
  menuNavItems: MenuNavItem[] = [];

  constructor() { }

  ngOnInit() {
    this.setMenuNavItems();
  }

  private setMenuNavItems() {
    this.menuNavItems.push(new MenuNavItem('Donations', 'donations'));
    this.menuNavItems.push(new MenuNavItem('Corporate Sponsors', 'corporatesponsors'));
    this.menuNavItems.push(new MenuNavItem('Fundraisers', 'fundraisers'));
  }

}
