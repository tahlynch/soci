import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from 'environments/firebase.config';
import { AuthService } from './providers/auth.service';
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

@Component({selector: 'blank-cmp', template: ``})
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
      providers: [AuthService]
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create the app', async(() => {
  //   expect(component).toBeDefined();
  // }));

  // it(`should have as title 'Angular 2 Setup'`, async(() => {
  //   expect(component.title).toEqual('Angular 2 Setup');
  // }));
});
