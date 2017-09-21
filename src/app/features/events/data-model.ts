export class SociEvent {
  $key?: any;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  eventType: string;
  eventStatus: string;
  title: string;
  description: string;
  locationPlaceName: string;
  location?: SociLocation;
  photo?: File;
  photoCaption?: string;
}

export class SociLocation {
  latitude: number;
  longitude: number;
}

export const eventTypes = ['Sports - Athletics', 'Fundraiser', 'Community - Leadership']; // read these out of database

export const eventStatuses = ['Active', 'Inactive', 'Cancelled', 'Postponed']; // read these out of database

export const eventTimes = ['12:00PM', '12:30PM'];
