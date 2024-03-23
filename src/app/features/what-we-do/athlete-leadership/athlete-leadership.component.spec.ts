import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteLeadershipComponent } from './athlete-leadership.component';

describe('AthleteLeadershipComponent', () => {
  let component: AthleteLeadershipComponent;
  let fixture: ComponentFixture<AthleteLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
