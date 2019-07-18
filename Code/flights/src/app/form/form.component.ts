import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  destination: string;
  time: string;
  flightNumber: string;
  title = 'flights';
  show = false;
  @Output() flightCreated = new EventEmitter<Flight>();

  constructor() { }

  ngOnInit() {
  }

  createFlight() {
    this.show = false;
    let flight = new Flight();
    flight.destination = this.destination;
    flight.time = this.time;
    flight.number = this.flightNumber;

    this.flightCreated.emit(flight);

    this.destination = '';
    this.time = '';
    this.flightNumber = '';
  }

  addFlight() {
    this.show = true;
  }

}
