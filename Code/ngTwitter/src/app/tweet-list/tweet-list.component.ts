import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {
  validTweet = true;
  likedTweet = false;
  commented = false;
  yourComment: string = '';
  comments: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  likeTweet() {
    this.likedTweet = true;
  }

  dislikeTweet() {
    this.likedTweet = false;
  }

  comment() {
    this.commented = true;
  }

  submitComm() {
    this.comments.push(this.yourComment);
  }

  deleteTweet() {
    this.validTweet = false;
  }

}
