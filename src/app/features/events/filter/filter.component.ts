import { Component, SimpleChanges, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'soci-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '0px',
      })),
      state('out', style({
        height: '*',
      })),
      transition('in => out', animate('100ms ease-in-out')),
      transition('out => in', animate('0ms ease-in-out'))
    ]),
  ]
})
export class FilterComponent {
  menuState = 'in';
  icon = 'filter_list';
  @ViewChild('filterComponent') container: ElementRef;
  constructor() { }

  onFilterButtonClicked() {
    this.toggleVisibility();
  }

  @HostListener('document:click', ['$event'])
  onClick(el: Event) {
    if (!this.container.nativeElement.contains(el.target)) {
      this.closeFilter();
    }
  }

  private toggleVisibility() {
    if (this.menuState === 'out') {
      this.closeFilter();
    } else {
      this.openFilter();
    }
  }

  private openFilter() {
    this.menuState = 'out';
    this.icon = 'close';
  }

  private closeFilter() {
    this.menuState = 'in';
    this.icon = 'filter_list';
  }
}
