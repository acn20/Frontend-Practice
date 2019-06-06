import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arguments',
  templateUrl: './arguments.component.html',
  styleUrls: ['./arguments.component.scss']
})
export class ArgumentsComponent implements OnInit {
  @Input() forText: string;
  @Input() againstText: string;

  constructor() { }

  ngOnInit() {
  }

}
