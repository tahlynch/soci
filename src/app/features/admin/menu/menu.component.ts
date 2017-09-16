import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from './menu-item';

@Component({
  selector: 'soci-admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems.push(new MenuItem('/admin/mystories', 'My Stories', 'collections'));
    this.menuItems.push(new MenuItem('/admin/myevents', 'My Events', 'assignment'));
  }

  onNewEventClicked() {
    this.router.navigate(['admin/eventpublisher']);
  }
}
