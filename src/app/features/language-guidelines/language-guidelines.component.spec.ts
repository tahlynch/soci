import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageGuidelinesComponent } from './language-guidelines.component';

describe('LanguageGuidelinesComponent', () => {
  let component: LanguageGuidelinesComponent;
  let fixture: ComponentFixture<LanguageGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
