export class SociEvent {
  key?: any;
  description: string;
  documentUrl?: string;
  endDate: Date;
  endTime: string;
  eventStatus: string;
  eventTypeId: number;
  location?: SociLocation;
  locationPlaceName: string;
  startDate: Date;
  startTime: string;
  title: string;
}

export class SociLocation {
  latitude: number;
  longitude: number;
}

export const eventTypes = [
  'Sports - Athletics',
  'Fundraiser',
  'Community - Leadership'
];

export class EventType {
  id: number;
  name: string;
  color: string;
}

export const fooEventTypes: EventType[] = [
  { id: 0, name: 'Sports - Athletics', color: '#ffc0cb' },
  { id: 1, name: 'Fundraiser', color: '#ce93d8' },
  { id: 2, name: 'Community - Leadership', color: '#80cbc4' }
];

export const eventStatuses = ['Active', 'Inactive', 'Cancelled', 'Postponed']; // read these out of database

export const eventTimes = [
  '12:00AM',
  '1:00AM',
  '1:30AM',
  '2:00AM',
  '2:30AM',
  '3:00AM',
  '3:30AM',
  '4:00AM',
  '4:30AM',
  '5:00AM',
  '5:30AM',
  '6:00AM',
  '6:30AM',
  '7:00AM',
  '7:30AM',
  '8:00AM',
  '8:30AM',
  '9:00AM',
  '9:30AM',
  '10:00AM',
  '10:30AM',
  '11:00AM',
  '11:30AM',
  '12:00PM',
  '1:00PM',
  '1:30PM',
  '2:00PM',
  '2:30PM',
  '3:00PM',
  '3:30PM',
  '4:00PM',
  '4:30PM',
  '5:00PM',
  '5:30PM',
  '6:00PM',
  '6:30PM',
  '7:00PM',
  '7:30PM',
  '8:00PM',
  '8:30PM',
  '9:00PM',
  '9:30PM',
  '10:00PM',
  '10:30PM',
  '11:00PM',
  '11:30PM'
];
