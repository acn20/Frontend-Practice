import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() element: string;
  @Input() index: number;
  shownBtn = false;
  @Output() deleteRequested = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  showBtn() {
    this.shownBtn = true;
  }

  hideBtn() {
    this.shownBtn = false;
  }

  deleteElem() {
    this.deleteRequested.emit(this.index);
  }

}
