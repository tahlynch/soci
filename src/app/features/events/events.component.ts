import { Component, OnInit } from '@angular/core';
import { Event, eventTypes } from './data-model';

@Component({
  selector: 'soci-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  temp: Foo[] = [];
  constructor() { }

  ngOnInit() {
    const firstEvent = new Event();
    firstEvent.startDate = new Date();
    firstEvent.title = 'Shotput';
    firstEvent.startTime = '1:45pm';
    firstEvent.endTime = '3:45pm';
    firstEvent.eventType = 'Sports - Athletics';
    this.events.push(firstEvent);

    const secondEvent = new Event();
    secondEvent.startDate = new Date('Wed Oct 18 2017 00:00:00 GMT-0500 (SA Pacific Standard Time)');
    secondEvent.title = 'Gala';
    secondEvent.startTime = '10:00am';
    secondEvent.endTime = '7:00pm';
    secondEvent.eventType = 'Fundraiser';
    this.events.push(secondEvent);

    const thirdEvent = new Event();
    thirdEvent.startDate = new Date('Wed Oct 18 2017 00:00:00 GMT-0500 (SA Pacific Standard Time)');
    thirdEvent.title = 'Town Hall';
    thirdEvent.startTime = '6:00pm';
    thirdEvent.endTime = '7:00pm';
    thirdEvent.eventType = 'Community - Leadership';
    this.events.push(thirdEvent);

    let forthEvent = new Event();
    forthEvent.startDate = new Date('Wed Oct 22 2017 00:00:00 GMT-0500 (SA Pacific Standard Time)');
    forthEvent.title = 'Gala';
    forthEvent.startTime = '10:00am';
    forthEvent.endTime = '7:00pm';
    forthEvent.eventType = 'Fundraiser';
    this.events.push(forthEvent);

    forthEvent = new Event();
    forthEvent.startDate = new Date('Wed Oct 22 2017 00:00:00 GMT-0500 (SA Pacific Standard Time)');
    forthEvent.title = 'Shotput';
    forthEvent.startTime = '1:45pm';
    forthEvent.endTime = '3:45pm';
    forthEvent.eventType = 'Sports - Athletics';
    this.events.push(forthEvent);

    forthEvent = new Event();
    forthEvent.startDate = new Date('Wed Oct 22 2017 00:00:00 GMT-0500 (SA Pacific Standard Time)');
    forthEvent.title = 'Town Hall';
    forthEvent.startTime = '6:00pm';
    forthEvent.endTime = '7:00pm';
    forthEvent.eventType = 'Community - Leadership';
    this.events.push(forthEvent);

    this.temp = this.foo();
  }

  getTagClass(eventType: string): string {
    switch (eventType) {
      case eventTypes[0]:
        return 'schedule__row__event__tag--sports';
      case eventTypes[1]:
        return 'schedule__row__event__tag--fundraiser';
      case eventTypes[2]:
        return 'schedule__row__event__tag--community-leadership';
      default:
        break;
    }
  }

  private foo(): Foo[] {
    const foo: Foo[] = [];
    this.events.forEach((event) => {
      let test = foo.find(f => f.date.getDay() === event.startDate.getDay() &&
        f.date.getMonth() === event.startDate.getMonth() &&
        f.date.getFullYear() === event.startDate.getFullYear());
      if (!test) {
        test = new Foo();
        test.date = event.startDate;
        foo.push(test);
      }
      test.events.push(event);
    });
    return foo;
  }
}

export class Foo {
  date: Date;
  events: Event[] = [];
}
