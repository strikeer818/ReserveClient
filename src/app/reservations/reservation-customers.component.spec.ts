import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCustomersComponent } from './reservation-customers.component';

describe('ReservationCustomersComponent', () => {
  let component: ReservationCustomersComponent;
  let fixture: ComponentFixture<ReservationCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
