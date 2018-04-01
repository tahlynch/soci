import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedSportsComponent } from './unified-sports.component';

describe('UnifiedSportsComponent', () => {
  let component: UnifiedSportsComponent;
  let fixture: ComponentFixture<UnifiedSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnifiedSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnifiedSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
