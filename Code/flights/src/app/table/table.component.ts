import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() flights: Array<Flight> = [];

  constructor() { }

  ngOnInit() {
  }

}
