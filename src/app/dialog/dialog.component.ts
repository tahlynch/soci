import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'soci-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
    document.body.style.overflowY = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflowY = 'auto';
  }
}
