import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

@Component({selector: 'soci-blank-cmp', template: ``})
class DefaultComponent {}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DefaultComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([{path: 'login', component: DefaultComponent}]),
        AngularFireModule.initializeApp(firebaseConfig)
      ],
      providers: []
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
