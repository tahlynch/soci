import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Story } from './story/story';

@Injectable()
export class StoryService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

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

  allStories(): AngularFireList<any> {
    return this.angularFireDatabase.list('/stories');
  }

  getStory(key: string): any {
    return this.angularFireDatabase.object('/stories/' + key);
  }

  private putFileInStorage(file: File, folderPath: string): firebase.storage.UploadTask {
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(folderPath + '/' + file.name);
    return ref.put(file);
  }

  private saveStory(story: Story) {
    const item = this.angularFireDatabase.list('/stories').push(story);
  }
}
