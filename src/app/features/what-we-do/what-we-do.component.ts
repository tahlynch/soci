import { Component, OnInit } from '@angular/core';
import { MenuNavItem } from '../../menu/menu-nav-item';

@Component({
  selector: 'soci-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {
  menuNavItems: MenuNavItem[] = [];
  constructor() { }

  ngOnInit() {
    this.setMenuNavItems();
  }

  private setMenuNavItems() {
    this.menuNavItems.push(new MenuNavItem('Sports Disciplines', 'sportsdisciplines'));
    this.menuNavItems.push(new MenuNavItem('Competitions', 'competitions'));
    this.menuNavItems.push(new MenuNavItem('Unified Sports', 'unifiedsports'));
    this.menuNavItems.push(new MenuNavItem('Athlete Leadership Programme', 'athleteleadershipprogramme'));
  }

}
