import { Component } from '@angular/core';
import { AgeCheckerService } from './services/age-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'legal-or-not';
  age: number;
  action: string;
  message: string = '';

  constructor(readonly ageCheckerService: AgeCheckerService) {//dependency injection
  }

  showIfLegal() {

    switch (this.action) {
      case 'voting':
        {
          if (this.ageCheckerService.canVote(this.age)) {
            this.message = "can vote";
          }
          else {
            this.message = "can't vote";
          }
          break;
        }
      case 'drinking':
        {
          if (this.ageCheckerService.canDrink(this.age)) {
            this.message = "can drink";
          }
          else {
            this.message = "can't drink";
          }
          break;
        }
      case 'driving':
        {
          if (this.ageCheckerService.canDrive(this.age)) {
            this.message = "can drive";
          }
          else {
            this.message = "can't drive";
          }
          break;
        }
    }
  }

}
