import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Event, eventTypes } from './data-model';

@Component({
  selector: 'soci-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  temp: Foo[] = [];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const firstEvent = new Event();
    firstEvent.startDate = new Date();
    firstEvent.title = 'Shotput';
    firstEvent.startTime = '1:45pm';
    firstEvent.endTime = '3:45pm';
    firstEvent.eventType = 'Sports - Athletics';
    firstEvent.description = 'Want to extend your app to new platforms including Android Wear, Daydream, TV and Auto? Our office hours are hosted by Google UX leads responsible for Play Store, Wear, TV, and Auto and during 1:1 sessions, developers can get guidance on 1) app design principles for these new formats, 2) how to find balance between design consistency with existing patterns and coherency with the medium, and 3) how to apply Material Design patterns.';
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

  onEventClicked(event: any) {
    this.router.navigate(['event'], { relativeTo: this.route });
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
