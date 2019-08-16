import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTwitter';
  @Input() yourTweet: string;
  tweeted = false;

  tweet() {
    this.tweeted = true;
  }

}
