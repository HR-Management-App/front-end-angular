import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTrackComponent } from './status-track.component';

describe('StatusTrackComponent', () => {
  let component: StatusTrackComponent;
  let fixture: ComponentFixture<StatusTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
