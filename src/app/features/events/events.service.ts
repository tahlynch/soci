import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/rx';
import { FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

import { SociEvent, SociLocation } from './data-model';

@Injectable()
export class EventsService {
  eventItems: SociEvent[] = [];
  isLoadingEvents = false;
  constructor(private angularFireDatabase: AngularFireDatabase) {
  }

  getAllEvents(): Observable<any[]> {
    return this.angularFireDatabase
      .list('/events')
      .snapshotChanges()
      .map((actions) => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() }));
      });
  }

  getEvent(key: string) {
    return this.angularFireDatabase.object('/events/' + key);
  }

  saveEvent(eventForm: FormGroup, location: SociLocation, image: File) {
    const sociEvent = this.prepareSaveEvent(eventForm, location);
    if (image) {
      this.putFileInStorage(image, 'events')
        .then((uploadTask: firebase.storage.UploadTaskSnapshot) => {
          sociEvent.documentUrl = uploadTask.downloadURL;
          const stringDateEvent = this.getStringDateEvent(sociEvent);
          this.angularFireDatabase.list('/events').push(stringDateEvent);
        });
    } else {
      const stringDateEvent = this.getStringDateEvent(sociEvent);
      this.angularFireDatabase.list('/events').push(stringDateEvent);
    }
  }

  updateEvent(eventForm: FormGroup, location: SociLocation, eventKey: string, image: File) {
    const sociEvent = this.prepareSaveEvent(eventForm, location);
    if (image) {
      this.putFileInStorage(image, 'events')
        .then((uploadTask: firebase.storage.UploadTaskSnapshot) => {
          sociEvent.documentUrl = uploadTask.downloadURL;
          const stringDateEvent = this.getStringDateEvent(sociEvent);
          this.angularFireDatabase.object('/events/' + eventKey).set(stringDateEvent);
        });
    } else {
      const stringDateEvent = this.getStringDateEvent(sociEvent);
      this.angularFireDatabase.object('/events/' + eventKey).set(stringDateEvent);
    }
  }

  deleteEvent(key: string) {
    this.angularFireDatabase.object('/events/' + key).remove();
  }

  private prepareSaveEvent(eventForm: FormGroup, location: SociLocation): SociEvent {
    const formModel = eventForm.value;
    const saveEvent: SociEvent = {
      startDate: formModel.startDate as Date,
      endDate: formModel.endDate as Date,
      startTime: formModel.startTime as string,
      endTime: formModel.endTime as string,
      eventTypeId: formModel.eventTypeId as number,
      eventStatus: formModel.eventStatus as string,
      title: formModel.title as string,
      description: formModel.description as string,
      locationPlaceName: formModel.locationPlaceName as string,
      location: location
    };
    return saveEvent;
  }

  private getStringDateEvent(event: SociEvent) {
    const stringDateEvent: any = event;
    stringDateEvent.startDate = event.startDate.toString();
    stringDateEvent.endDate = event.endDate.toString();
    return stringDateEvent;
  }

  private putFileInStorage(file: File, folderPath: string): firebase.storage.UploadTask {
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(folderPath + '/' + file.name);
    return ref.put(file);
  }
}
