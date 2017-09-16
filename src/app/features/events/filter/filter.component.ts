import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'soci-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, -100%)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('250ms ease-in-out')),
      transition('out => in', animate('150ms ease-in-out'))
    ]),
  ]
})
export class FilterComponent implements OnInit {
  menuState = 'in';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    if (this.menuState === 'in') {
      this.menuState = 'out';
    } else {
      this.menuState = 'in';
    }
  }

}
