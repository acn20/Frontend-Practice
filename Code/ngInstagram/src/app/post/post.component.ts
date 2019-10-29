import { Component, OnInit } from '@angular/core';
import { Post } from '../insta-common/post';
import { InstagramService } from '../insta-common/instagram.service';

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
  post: Post;

  constructor(private dataService: InstagramService) { }

  ngOnInit() {
    this.dataService.getPost('01').subscribe((data: Post) => {
      this.post = data;
    });
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
