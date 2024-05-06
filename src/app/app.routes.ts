import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationCustomersComponent } from './reservations/reservation-customers.component';

export const routes: Routes = [
    {path: '', component: HelloComponent, pathMatch: 'full'},
    {path: 'reservations', component: ReservationsComponent},
    {path: 'reservationCustomers/:id', component: ReservationCustomersComponent},
];
