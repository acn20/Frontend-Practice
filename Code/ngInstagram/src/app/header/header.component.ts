import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../insta-common/instagram.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.instagramService.getComments('saincosa');
    this.instagramService.getLikes('84219hh2198');
    this.instagramService.getPost('322');
    this.instagramService.getFeed();
    this.instagramService.getUserPosts('123')
  }

}
