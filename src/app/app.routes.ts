import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ReservationsComponent } from './reservations/reservations.component';

export const routes: Routes = [
    {path: '', component: HelloComponent, pathMatch: 'full'},
    {path: 'reservations', component: ReservationsComponent},
];
