import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SociEvent, eventTypes, eventStatuses, eventTimes, SociLocation } from '../../events/data-model';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { EventsService } from '../../events/events.service';


@Component({
  selector: 'soci-event-publisher',
  templateUrl: './event-publisher.component.html',
  styleUrls: ['./event-publisher.component.less', '../../../dialog/dialog-decision-styles.less']
})
export class EventPublisherComponent implements OnInit {
  eventKey: string;
  sociLocation = new SociLocation();
  zoom = 15;
  @ViewChild('search')
  searchElementRef: ElementRef;
  locationPlaceName = '';
  eventForm: FormGroup;
  eventTimes = eventTimes;
  eventTypes = eventTypes;
  eventStatuses = eventStatuses;
  titleChangeLog: string[] = [];
  isTouchUi = false;
  pageTitle = '';
  submitButtonText = '';
  isDecisionDialogOpen = false;
  private isEditingEvent = false;

  constructor(private eventsService: EventsService, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    this.createForm();
    this.eventKey = this.getEventKeyFromRoute();
    if (!this.eventKey || this.eventKey.length === 0) {
      this.isEditingEvent = false;
      this.pageTitle = 'Event Publisher';
      this.submitButtonText = 'Save';
      this.initialiseLocation();
      this.initialiseGoogleMaps();
      return;
    }
    this.isEditingEvent = true;
    this.pageTitle = 'Event Editor';
    this.submitButtonText = 'Update';
    this.loadEvent(this.eventKey);
    this.initialiseGoogleMaps();
  }

  resetForm() {
    this.eventForm.reset();
    this.titleChangeLog = [];
  }

  onSubmit() {
    if (this.eventForm.invalid) {
      return;
    }

    if (this.eventForm.pristine) {
      this.navigateToMyEventsPage();
    }

    if (this.isEditingEvent) {
      this.openDecisionDialog();
    } else {
      this.eventsService.saveEvent(this.eventForm, this.sociLocation);
      this.navigateToMyEventsPage();
    }
  }

  onCancelClicked() {
    this.navigateToMyEventsPage();
  }

  onPhotoChange(file: File) {
    this.eventForm.patchValue({
      photo: file
    });
  }

  onDialogCancelClicked() {
    this.closeDecisionDialog();
  }

  onDialogUpdateClicked() {
    this.eventsService.updateEvent(this.eventForm, this.sociLocation, this.eventKey);
    this.closeDecisionDialog();
    this.navigateToMyEventsPage();
  }

  private openDecisionDialog() {
    this.isDecisionDialogOpen = true;
  }

  private closeDecisionDialog() {
    this.isDecisionDialogOpen = false;
  }

  private navigateToMyEventsPage() {
    this.router.navigate(['admin']);
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
      this.setForm(event);
      this.setLocation(event.location);
    });
  }

  private setForm(event: SociEvent) {
    const formObject = {
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
      startTime: event.startTime,
      endTime: event.endTime,
      eventType: event.eventType,
      eventStatus: event.eventStatus,
      title: event.title,
      description: event.description,
      locationPlaceName: event.locationPlaceName,
      photo: null,
      photoCaption: ''
    };
    this.eventForm.setValue(formObject);
  }

  private setLocation(location: SociLocation) {
    this.sociLocation = location;
  }

  private initialiseGoogleMaps() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.sociLocation.latitude = place.geometry.location.lat();
          this.sociLocation.longitude = place.geometry.location.lng();
          this.zoom = 16;
          this.locationPlaceName = this.getLocationPlaceName(place);
        });
      });
    });
  }

  private initialiseLocation() {
    if (!('geolocation' in navigator)) {
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.sociLocation.latitude = position.coords.latitude;
      this.sociLocation.longitude = position.coords.longitude;
    });
  }

  private getLocationPlaceName(place: google.maps.places.PlaceResult): string {
    if (place.formatted_address === undefined || place.formatted_address === '') {
      return place.name;
    }
    return place.name + ', ' + place.formatted_address;
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
      locationPlaceName: ['', Validators.required],
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
    sociEvent.locationPlaceName = event.locationPlaceName || '';
    sociEvent.location = event.location || new SociLocation();
    sociEvent.photo = event.photo || null;
    sociEvent.photoCaption = event.photoCaption || '';
    sociEvent.startDate = new Date(event.startDate);
    sociEvent.startTime = event.startTime || '';
    sociEvent.title = event.title || '';
    return sociEvent;
  }
}
