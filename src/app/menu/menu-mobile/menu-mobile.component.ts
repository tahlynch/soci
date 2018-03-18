import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuNavItem } from '../menu-nav-item';

@Component({
  selector: 'soci-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent {
  @Input() menuNavItems: MenuNavItem[] = [];
  constructor(private router: Router, private route: ActivatedRoute) { }

  navigate(routerLink: string) {
    this.router.navigate([routerLink], {relativeTo: this.route});
  }
}
