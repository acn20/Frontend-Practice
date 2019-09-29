import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  commentArea = false;
  likedPic = false;
  likes: number = 0;
  username: string = 'BJD';

  constructor() { }

  ngOnInit() {
  }

  commentSmth () {
    this.commentArea = true;
  }

  liked() {
    this.likedPic = true;
    this.likes++;
  }

  unliked() {
    this.likedPic = false;
  }

}
