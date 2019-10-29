import { Component, OnInit } from '@angular/core';
import { Post } from '../insta-common/post';
import { InstagramService } from '../insta-common/instagram.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feed: Array<Post>;

  constructor(private dataService: InstagramService) { }

  ngOnInit() {
    this.dataService.getFeed().subscribe((data: Array<Post>) => {
      this.feed = data;
    });
  }

}
