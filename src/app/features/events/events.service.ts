import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/rx';

@Injectable()
export class EventsService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getAllEvents(): FirebaseListObservable<any[]> {
    return this.angularFireDatabase.list('/events');
  }

  getEvent(key: string) {
    return this.angularFireDatabase.object('/events/' + key);
  }
}
