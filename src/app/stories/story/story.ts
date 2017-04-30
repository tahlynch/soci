export class Story {
  id: string;
  title: string;
  body: string;
  uid: string;
  documentUrls: string[] = [];
  created?: number;
  isDraft = false;
  isAccepted = true;
  auther: string;
}
