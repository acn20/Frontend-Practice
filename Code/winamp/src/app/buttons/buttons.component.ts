import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  playing = false;
  @Output() next = new EventEmitter<any>();
  @Output() previous = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  play() {
    this.playing = true;
  }

  pause() {
    this.playing = false;
  }

  playNext() {
    this.next.emit();
  }

  playPrevious() {
    this.previous.emit();
  }

}
