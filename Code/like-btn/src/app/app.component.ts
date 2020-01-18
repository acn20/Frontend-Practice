import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLiked = false;
  likeCount = 10;
  title = 'like-btn';

  liked() {
    console.log("liked");
  }

  unliked() {
    console.log("unliked");
  }

}
