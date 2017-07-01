import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Album } from 'app/gallery/albums/album/album';

@Injectable()
export class AlbumService {

  constructor(private af: AngularFire) { }
  getAlbum(key: string): FirebaseObjectObservable<Album> {
    return this.af.database.object('/gallery/albums/' + key);
  }
}
