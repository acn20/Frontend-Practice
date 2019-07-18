import { Component } from '@angular/core';
import { Flight } from './flight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flights: Array<Flight> = [];

  onFlightCreated(flight: Flight) {
    this.flights.push(flight);
  }
}
