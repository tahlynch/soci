import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
@Component({
  selector: 'soci-admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems.push(new MenuItem('eventpublisher', 'Event Publisher', 'event'));
    this.menuItems.push(new MenuItem('admin', 'Second', 'star rate'));
    this.menuItems.push(new MenuItem('admin', 'Third', 'star rate'));
    this.menuItems.push(new MenuItem('admin', 'Fourth', 'star rate'));
    this.menuItems.push(new MenuItem('admin', 'Fifth', 'star rate'));
  }
}
