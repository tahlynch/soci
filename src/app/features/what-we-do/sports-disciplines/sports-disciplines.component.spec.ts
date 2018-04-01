import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsDisciplinesComponent } from './sports-disciplines.component';

describe('SportsDisciplinesComponent', () => {
  let component: SportsDisciplinesComponent;
  let fixture: ComponentFixture<SportsDisciplinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsDisciplinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
