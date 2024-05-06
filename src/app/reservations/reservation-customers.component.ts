import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-reservation-customers',
  standalone: true,
  imports: [RouterLink, MatTableModule],
  templateUrl: './reservation-customers.component.html',
  styleUrl: './reservation-customers.component.css'
})
export class ReservationCustomersComponent {
  public customers: Customer[] = [];
  baseUrl = "http://localhost:5245/";
  public displayedColumns : string[] = ["customerId", "name", "email", "phone"];
  id: number;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.id = -1;
  }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    let idparameter = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idparameter ? +idparameter : -1;
    this.http.get<Customer[]>(`${this.baseUrl}api/Reservations/ReservationCustomers/${this.id}`).subscribe(
      {
        next: result=>this.customers = result,
        error: error=>console.error(error),
      },
    );
  }
  title = 'CustomerClient';
}
