export class Story {
  title: string;
  body: string;
  uid: string;
  documentUrls: string[] = [];
  created?: number;
  isDraft = false;
  isAccepted = true;
}
