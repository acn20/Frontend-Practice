import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-index',
  templateUrl: './question-index.component.html',
  styleUrls: ['./question-index.component.scss']
})
export class QuestionIndexComponent implements OnInit {
  @Input() index: number;
  isSelected = false;
  
  constructor() { }

  ngOnInit() {
  }

}
