import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event, eventTypes, eventStatuses } from './data-model';

@Component({
  selector: 'soci-event-publisher',
  templateUrl: './event-publisher.component.html',
  styleUrls: ['./event-publisher.component.less']
})
export class EventPublisherComponent implements OnInit {
  event: Event;
  eventForm: FormGroup;
  eventTypes = eventTypes;
  eventStatuses = eventStatuses;
  titleChangeLog: string[] = [];
  isTouchUi = false;


  constructor(private formBuilder: FormBuilder) {
    this.createForm();
    this.logTitleChanges();
  }

  ngOnInit() {
  }

  resetForm() {
    this.eventForm.reset();
    this.titleChangeLog = [];
  }

  logTitleChanges() {
    const titleControl = this.eventForm.get('title');
    titleControl.valueChanges.forEach(
      (value: string) => this.titleChangeLog.push(value)
    );
  }

  onSubmit() {
    this.event = this.prepareSaveEvent();
    alert('Submitted');
  }

  onPhotoChange(file: File) {
    this.eventForm.patchValue({
      photo: file
    });
  }

  private prepareSaveEvent(): Event {
    const formModel = this.eventForm.value;
    const saveEvent: Event = {
      startDate: formModel.startDate as Date,
      endDate: formModel.endDate as Date,
      startTime: formModel.startTime as number,
      endTime: formModel.endTime as number,
      eventType: formModel.eventType as string,
      eventStatus: formModel.eventStatus as string,
      title: formModel.title as string,
      description: formModel.description as string
    };
    return saveEvent;
  }

  private createForm() {
    this.eventForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      eventType: ['', Validators.required],
      eventStatus: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      venueName: '',
      location: '',
      photo: File,
      photoCaption: ''
    });
  }
}
