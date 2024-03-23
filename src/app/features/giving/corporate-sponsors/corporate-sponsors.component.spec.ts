import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSponsorsComponent } from './corporate-sponsors.component';

describe('CorporateSponsorsComponent', () => {
  let component: CorporateSponsorsComponent;
  let fixture: ComponentFixture<CorporateSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
