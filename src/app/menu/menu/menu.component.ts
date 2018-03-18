import { Component, Input, HostListener, OnInit } from '@angular/core';

import { MenuNavItem } from '../menu-nav-item';

@Component({
  selector: 'soci-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuNavItems: MenuNavItem[] = [];
  isMobile = false;

  ngOnInit(): void {
    this.setIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setIsMobile();
  }

  private setIsMobile() {
    window.screen.width < 800 ? this.isMobile = true : this.isMobile = false;
  }
}
