import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SociEvent, eventTypes, eventStatuses, eventTimes } from '../../events/data-model';
import { EventsService } from '../../events/events.service';

@Component({
  selector: 'soci-event-publisher',
  templateUrl: './event-publisher.component.html',
  styleUrls: ['./event-publisher.component.less']
})
export class EventPublisherComponent implements OnInit {
  eventForm: FormGroup;
  eventTimes = eventTimes;
  eventTypes = eventTypes;
  eventStatuses = eventStatuses;
  titleChangeLog: string[] = [];
  isTouchUi = false;
  pageTitle = '';
  submitButtonText = '';
  constructor(private eventsService: EventsService, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
    const key = this.getEventKeyFromRoute();
    if (!key || key.length === 0) {
      this.pageTitle = 'Event Publisher';
      this.submitButtonText = 'Save';
      return;
    }
    this.pageTitle = 'Event Editor';
    this.submitButtonText = 'Edit';
    this.loadEvent(key);
  }

  resetForm() {
    this.eventForm.reset();
    this.titleChangeLog = [];
  }

  onSubmit() {
    if (this.eventForm.invalid) {
      return;
    }
    this.eventsService.saveEvent(this.prepareSaveEvent());
    this.navigateToMyEventsPage();
  }

  onCancelClicked() {
    this.navigateToMyEventsPage();
  }

  onPhotoChange(file: File) {
    this.eventForm.patchValue({
      photo: file
    });
  }

  private navigateToMyEventsPage() {
    this.router.navigate(['admin']);
  }

  private prepareSaveEvent(): SociEvent {
    const formModel = this.eventForm.value;
    const saveEvent: SociEvent = {
      startDate: formModel.startDate as Date,
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
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
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

  private createSociEvent(event: SociEvent): SociEvent {
    const sociEvent: SociEvent = new SociEvent();
    sociEvent.description = event.description || '';
    sociEvent.endDate = new Date(event.endDate);
    sociEvent.endTime = event.endTime || '';
    sociEvent.eventStatus = event.eventStatus || '';
    sociEvent.eventType = event.eventType || '';
    sociEvent.location = event.location || '';
    sociEvent.photo = event.photo || null;
    sociEvent.photoCaption = event.photoCaption || '';
    sociEvent.startDate = new Date(event.startDate);
    sociEvent.startTime = event.startTime || '';
    sociEvent.title = event.title || '';
    sociEvent.venueName = event.venueName || '';
    return sociEvent;
  }

  private getEventKeyFromRoute(): string {
    let key: string;
    this.route.params.subscribe((params) => {
      key = params['key'] as string;
    });
    return key;
  }

  private loadEvent(key: string) {
    this.eventsService.getEvent(key).subscribe((event: SociEvent) => {
      this.eventForm.setValue(this.createSociEvent(event));
    });
  }
}
