import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Story } from '../stories/story/story';

@Injectable()
export class StoryService {

  constructor(private af: AngularFire) { }

  uploadStory(story: Story, fileList: FileList) {
    if (fileList.length === 0) {
      return;
    }
    for (let index = 0; index < fileList.length; index++) {
      this.putFileInStorage(fileList[index], 'story-photos')
        .then((uploadTask: firebase.storage.UploadTaskSnapshot) => {
          story.documentUrls.push(uploadTask.downloadURL);
          if (index === fileList.length - 1) {
            this.saveStory(story);
          }
        });
    }
  }

  allStories(): FirebaseListObservable<any> {
    return this.af.database.list('/stories');
  }

  getStory(key: string): any {
    return this.af.database.object('/stories/' + key);
  }

  private putFileInStorage(file: File, folderPath: string): firebase.Promise<any> {
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(folderPath + '/' + file.name);
    return ref.put(file);
  }

  private saveStory(story: Story) {
    const item = this.af.database.list('/stories').push(story);
  }
}
