import { Component, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuNavItem } from '../menu-nav-item';

@Component({
  selector: 'soci-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent {
  @Input() menuNavItems: MenuNavItem[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private elementRef: ElementRef) { }

  navigate(routerLink: string) {
    this.scrollToTop();
    this.router.navigate([routerLink], { relativeTo: this.route });
  }

  private scrollToTop() {
    window.scroll({ top: this.nativeElement().previousElementSibling.clientHeight, left: 0 });
  }

  private nativeElement() {
    return this.elementRef.nativeElement as HTMLElement;
  }
}
