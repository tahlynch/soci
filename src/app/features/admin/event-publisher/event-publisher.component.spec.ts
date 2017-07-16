import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPublisherComponent } from './event-publisher.component';

describe('EventPublisherComponent', () => {
  let component: EventPublisherComponent;
  let fixture: ComponentFixture<EventPublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
