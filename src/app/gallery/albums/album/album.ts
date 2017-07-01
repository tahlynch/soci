export class Album {
  title: string;
  documentUrls: string[] = [];
  created?: number;
  isAccepted = true;
  auther: string;
  fileList: FileList;
  firstDate: number;
  lastDate: number;
}
