import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Album } from 'app/gallery/albums/album/album';

@Injectable()
export class AlbumsService {

  constructor(private af: AngularFire) { }

  uploadStory(album: Album) {
    if (album.fileList.length === 0) {
      return;
    }
    for (let index = 0; index < album.fileList.length; index++) {
      this.putFileInStorage(album.fileList[index], 'photos')
        .then((uploadTask: firebase.storage.UploadTaskSnapshot) => {
          album.documentUrls.push(uploadTask.downloadURL);
          if (index === album.fileList.length - 1) {
            this.setFirstAndLastDates(album);
            this.saveAlbum(album);
          }
        });
    }
  }
  getAlbums(): FirebaseListObservable<any> {
    return this.af.database.list('/gallery/albums')
      .map(items => items.sort((a: Album, b: Album) => b.created - a.created)) as FirebaseListObservable<any>;
  }

  private putFileInStorage(file: File, folderPath: string): firebase.Promise<any> {
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(folderPath + '/' + file.name);
    return ref.put(file);
  }

  private saveAlbum(album: Album) {
    const item = this.af.database.list('/gallery/albums').push(album);
  }

  private setFirstAndLastDates(album: Album) {
    let firstDate: Date = album.fileList[0].lastModifiedDate;
    let lastDate: Date = album.fileList[0].lastModifiedDate;
    for (let index = 0; index < album.fileList.length; index++) {
      if (firstDate > album.fileList[index].lastModifiedDate) {
        firstDate = album.fileList[index].lastModifiedDate;
      }
      if (lastDate < album.fileList[index].lastModifiedDate) {
        lastDate = album.fileList[index].lastModifiedDate;
      }
    }

    album.firstDate = firstDate.getTime();
    album.lastDate = lastDate.getTime();
  }
}
