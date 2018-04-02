import { Component, Input, HostListener, OnInit, ElementRef } from '@angular/core';

import { MenuNavItem } from '../menu-nav-item';

@Component({
  selector: 'soci-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuNavItems: MenuNavItem[] = [];
  isMobile = false;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.setIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setIsMobile();
  }

  scrollToTop() {
    window.scroll({ top: this.nativeElement().previousElementSibling.clientHeight, left: 0 });
  }

  private nativeElement() {
    return this.elementRef.nativeElement as HTMLElement;
  }

  private setIsMobile() {
    window.screen.width < 800 ? this.isMobile = true : this.isMobile = false;
  }
}
