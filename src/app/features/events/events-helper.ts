import { eventTypes } from './data-model';

export class EventsHelper {
  getTagClass(eventType: string): string {
    switch (eventType) {
      case eventTypes[0]:
        return 'event__tag--sports';
      case eventTypes[1]:
        return 'event__tag--fundraiser';
      case eventTypes[2]:
        return 'event__tag--community-leadership';
    }
  }
}
