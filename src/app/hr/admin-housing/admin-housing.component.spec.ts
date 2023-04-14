import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHousingComponent } from './admin-housing.component';

describe('AdminHousingComponent', () => {
  let component: AdminHousingComponent;
  let fixture: ComponentFixture<AdminHousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHousingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
