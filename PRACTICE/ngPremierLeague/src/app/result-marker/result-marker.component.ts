import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-marker',
  templateUrl: './result-marker.component.html',
  styleUrls: ['./result-marker.component.scss']
})
export class ResultMarkerComponent implements OnInit {
  @Input() result: number;

  constructor() { }

  ngOnInit() {
  }

}
