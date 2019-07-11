import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'legal-or-not';
  readonly votingAge = 16;//nu putem schimba valoarea acestor constante
  readonly drivingAge = 17;
  readonly drinkingAge = 18;

  age: number;
  action: string;
  message: string = '';

  showIfLegal() {

    switch (this.action) {
      case 'voting':
        {
          if (this.age >= this.votingAge) {
            this.message = "can vote";
          }
          else {
            this.message = "can't vote";
          }
          break;
        }
      case 'drinking':
        {
          if (this.age >= this.drinkingAge) {
            this.message = "can drink";
          }
          else {
            this.message = "can't drink";
          }
          break;
        }
      case 'driving':
        {
          if (this.age >= this.drivingAge) {
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
