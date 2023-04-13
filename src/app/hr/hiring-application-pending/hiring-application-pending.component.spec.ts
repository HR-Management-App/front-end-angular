import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringApplicationPendingComponent } from './hiring-application-pending.component';

describe('HiringApplicationPendingComponent', () => {
  let component: HiringApplicationPendingComponent;
  let fixture: ComponentFixture<HiringApplicationPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringApplicationPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringApplicationPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
