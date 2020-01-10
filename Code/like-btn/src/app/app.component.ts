import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'like-btn';

  notLiked: boolean = true;
  liked: boolean = false;

  like() {
    this.liked = true;
    this.notLiked = false;
  }

  unlike() {
    this.liked = false;
    this.notLiked = true;
  }
}
