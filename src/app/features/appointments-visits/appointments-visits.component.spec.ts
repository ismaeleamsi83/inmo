import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsVisitsComponent } from './appointments-visits.component';

describe('AppointmentsVisitsComponent', () => {
  let component: AppointmentsVisitsComponent;
  let fixture: ComponentFixture<AppointmentsVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsVisitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentsVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
