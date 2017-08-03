export class Event {
  startDate: string;
  endDate: Date;
  startTime: string;
  endTime: string;
  eventType: string;
  eventStatus: string;
  title: string;
  description: string;
  venueName?: string;
  location?: string;
  photo?: File;
  photoCaption?: string;
}

export const eventTypes = ['Sports - Athletics', 'Fundraiser', 'Community - Leadership']; // read these out of database

export const eventStatuses = ['Active', 'Inactive', 'Cancelled', 'Postponed']; // read these out of database

export const eventTimes = ['12:00PM', '12:30PM'];
