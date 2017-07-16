import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  AnimationTransitionEvent
} from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import 'rxjs/add/operator/first';

@Component({
  selector: 'soci-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('250ms ease-in-out')),
      transition('out => in', animate('150ms ease-in-out'))
    ]),
  ]
})

export class SidenavComponent implements OnChanges {
  @Input() isOpen: boolean;
  @Output() onOpenBegin = new EventEmitter();
  @Output() onOpen = new EventEmitter();
  @Output() onCloseBegin = new EventEmitter();
  @Output() onClose = new EventEmitter();
  menuState = 'in';
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      this.updateState(changes['isOpen'].currentValue);
    }
  }

  open(): Promise<void> {
    this.onOpenBegin.emit();
    return Promise.resolve();
  }

  updateState(isOpen: boolean) {
    if (isOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  closeSideNav() {
    this.closeMenu();
    this.onClose.emit();
  }

  swipe() {
    this.closeSideNav();
  }

  private openMenu() {
    this.menuState = 'out';
  }

  private closeMenu() {
    this.menuState = 'in';
  }
}
