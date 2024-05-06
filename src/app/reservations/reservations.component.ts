import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reservation } from './reservation';
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
  baseUrl = "http://localhost:5245/";
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getReservations();
  }
  getReservations() {
    this.http.get<Reservation[]>(this.baseUrl+'api/Reservations').subscribe(
      {
        next: result=>this.reservations = result,
        error: error=>console.error(error),
      },
    );
  }
  title = 'CountryClient';
}
