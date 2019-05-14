import { Component, OnInit } from '@angular/core';
import { TeamResults } from '../models/team-results';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  items: Array<TeamResults> = [];

  constructor() { }

  ngOnInit() {//cand e creata componenta noastra e executata aceasta functie
    let manCity = new TeamResults();
    manCity.name = "Manchester City";
    manCity.points = 95;
    manCity.goalsFor = 100;
    manCity.goalsAgainst = 19;
    manCity.lastMatches = [1, 1, -1, 1, 0];
    // etc

    let liverpool: TeamResults = {
      name: "Liverpool",
      matches: 37,
      wins: 31,
      draws: 2,
      losses: 4,
      goalsFor: 91,
      goalsAgainst: 22,
      points: 95,
      lastMatches: [1, 1, 1, 1, 1]
    };

    this.items.push(liverpool);
    this.items.push(manCity);
  }
}

/*
{
    rank: "1",
    club: "Man. City",
    MP: "37",
    W: "31",
    D: "2",
    L: "4",
    GF: "91",
    GA: "22",
    GD: "69",
    Pts: "95",
    Last5: "*****"
},
{
    rank: "2",
    club: "Liverpool",
    MP: "37",
    W: "29",
    D: "7",
    L: "1",
    GF: "87",
    GA: "22",
    GD: "65",
    Pts: "94",
    Last5: "*****"
},
{
    rank: "3",
    club: "Chelsea",
    MP: "37",
    W: "21",
    D: "8",
    L: "8",
    GF: "63",
    GA: "39",
    GD: "24",
    Pts: "71",
    Last5: "*****"
},
{
    rank: "4",
    club: "Tottenham",
    MP: "37",
    W: "23",
    D: "1",
    L: "13",
    GF: "65",
    GA: "37",
    GD: "28",
    Pts: "70",
    Last5: "*****"
},
{
    rank: "5",
    club: "Arsenal",
    MP: "37",
    W: "20",
    D: "7",
    L: "10",
    GF: "70",
    GA: "20",
    GD: "50",
    Pts: "67",
    Last5: "*****"
},
{
    rank: "6",
    club: "Man United",
    MP: "37",
    W: "19",
    D: "9",
    L: "9",
    GF: "65",
    GA: "52",
    GD: "13",
    Pts: "66",
    Last5: "*****"
},
*/