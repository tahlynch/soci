import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Event, eventTypes, eventStatuses, eventTimes } from '../../events/data-model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'soci-event-publisher',
  templateUrl: './event-publisher.component.html',
  styleUrls: ['./event-publisher.component.less']
})
export class EventPublisherComponent implements OnInit {
  event: Event;
  eventForm: FormGroup;
  eventTimes = eventTimes;
  eventTypes = eventTypes;
  eventStatuses = eventStatuses;
  titleChangeLog: string[] = [];
  isTouchUi = false;


  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private route: ActivatedRoute) {
    this.createForm();
    this.logTitleChanges();
  }

  ngOnInit() {}

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
    this.adminService.saveEvent(this.event);
  }

  onPhotoChange(file: File) {
    this.eventForm.patchValue({
      photo: file
    });
  }

  private prepareSaveEvent(): Event {
    const formModel = this.eventForm.value;
    const saveEvent: Event = {
      startDate: (formModel.startDate as Date).toString(),
      endDate: formModel.endDate as Date,
      startTime: formModel.startTime as string,
      endTime: formModel.endTime as string,
      eventType: formModel.eventType as string,
      eventStatus: formModel.eventStatus as string,
      title: formModel.title as string,
      description: formModel.description as string,
      location: formModel.location as string
    };
    return saveEvent;
  }

  private createForm() {
    this.eventForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
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
