import { Component, OnInit } from '@angular/core';
import { MenuNavItem } from '../../menu/menu-nav-item';

@Component({
  selector: 'soci-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {
  menuNavItems: MenuNavItem[] = [];
  constructor() { }

  ngOnInit() {
    this.setMenuNavItems();
  }

  private setMenuNavItems() {
    this.menuNavItems.push(new MenuNavItem('Misson', 'mission'));
    this.menuNavItems.push(new MenuNavItem('Board Of Directors', 'boardofdirectors'));
    this.menuNavItems.push(new MenuNavItem('Stories', 'stories'));
  }
}
