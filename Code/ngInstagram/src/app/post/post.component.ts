import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  commentArea = false;
  likedPic = false;

  constructor() { }

  ngOnInit() {
  }

  commentSmth () {
    this.commentArea = true;
  }

  liked() {
    this.likedPic = true;
  }

  unliked() {
    this.likedPic = false;
  }

}
