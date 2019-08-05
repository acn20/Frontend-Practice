import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {
  @Output() squareClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clickedOnce() {
    this.squareClicked.emit();
  }

}
