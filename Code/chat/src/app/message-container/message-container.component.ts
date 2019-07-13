import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
