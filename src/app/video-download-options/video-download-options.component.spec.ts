import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDownloadOptionsComponent } from './video-download-options.component';

describe('VideoDownloadOptionsComponent', () => {
  let component: VideoDownloadOptionsComponent;
  let fixture: ComponentFixture<VideoDownloadOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDownloadOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDownloadOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
