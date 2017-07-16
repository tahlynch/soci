import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPhotoGalleryComponent } from './story-photo-gallery.component';

describe('StoryPhotoGalleryComponent', () => {
  let component: StoryPhotoGalleryComponent;
  let fixture: ComponentFixture<StoryPhotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPhotoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
