import { Component, OnInit, Input } from '@angular/core';
import { TeamResults } from '../models/team-results';

@Component({
  selector: 'app-standings-item',
  templateUrl: './standings-item.component.html',
  styleUrls: ['./standings-item.component.scss']
})
export class StandingsItemComponent implements OnInit {
  /* This input is populated by using [] in standings.component.html */
  @Input() teamResults: TeamResults;

  constructor() {
  }

  ngOnInit() {
  }
}
