import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPanelComponent } from './hiring-panel.component';

describe('HiringPanelComponent', () => {
  let component: HiringPanelComponent;
  let fixture: ComponentFixture<HiringPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
