export class Event {
  startDate: Date;
  endDate: Date;
  startTime: number;
  endTime: number;
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
