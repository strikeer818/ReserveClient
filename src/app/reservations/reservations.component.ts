import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reservation } from './reservation';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {
  public reservations: Reservation[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getReservations();
  }
  getReservations() {
    this.http.get<Reservation[]>(environment.baseUrl+'api/Reservations').subscribe(
      {
        next: result=>this.reservations = result,
        error: error=>console.error(error),
      },
    );
  }
  title = 'CountryClient';
}
