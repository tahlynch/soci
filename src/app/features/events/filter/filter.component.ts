import { Component, SimpleChanges, HostListener, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ConformsPredicateObject } from 'lodash';
import { forEach } from '@angular/router/src/utils/collection';

import { eventTypes, SociEvent } from '../data-model';

@Component({
  selector: 'soci-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '0px'
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
  eventTypeToggles = this.getEventTypeToggles();
  @Input() eventItemCount = 0;
  @Output() foo = new EventEmitter<{}>();
  filters: ConformsPredicateObject<SociEvent> = {};

  @ViewChild('filterComponent') container: ElementRef;
  constructor() {
  }

  private getEventTypeToggles() {
    const eventTypeToggles: { type: string, isActive: boolean }[] = [];
    eventTypes.forEach((type) => {
      eventTypeToggles.push({ type: type, isActive: true });
    });
    return eventTypeToggles;
  }

  onFilterButtonClicked() {
    this.toggleVisibility();
  }

  @HostListener('document:click', ['$event'])
  onClick(el: Event) {
    if (!this.container.nativeElement.contains(el.target)) {
      this.closeFilter();
    }
  }

  filterFromTodaysDate(property: string, rule: boolean) {
    if (rule) {
      this.removeFilter(property);
    } else {
      this.filters[property] = val => new Date(val) > new Date();
      this.emitFoo();
    }
  }

  filterCheckBoxes(property: string, box: string, isActive: boolean) {
    this.filters[property] = val => this.eventTypeToggles.find((f) => f.type === val).isActive;
    this.emitFoo();
  }

  filterExact(property: string, rule: any) {
    this.filters[property] = val => val === rule;
    this.emitFoo();
  }

  filterBoolean(property: string, rule: boolean) {
    if (!rule) {
      this.removeFilter(property);
    } else {
      this.filters[property] = val => val;
      this.emitFoo();
    }
  }

  private removeFilter(property: string) {
    delete this.filters[property];
    this[property] = null;
    this.emitFoo();
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

  private emitFoo() {
    this.foo.emit(this.filters);
  }
}
