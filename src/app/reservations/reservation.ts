import { Time } from "@angular/common";

export interface Reservation {
    reservationId: number;
    reservationDate: Date;
    reservationTime: Time;
    partySize: number;
    specialRequests: string;
}
