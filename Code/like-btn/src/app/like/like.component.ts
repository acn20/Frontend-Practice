import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() count: number;
  @Input() liked: boolean;
  @Output() like = new EventEmitter();
  @Output() unlike = new EventEmitter();
  currentLiked: boolean;

  ngOnInit() {
    this.currentLiked = this.liked;
  }

  toggleLike() {
    this.currentLiked = !this.currentLiked;

    if (this.currentLiked) {
      this.like.emit();
      this.count++;
    } else {
      this.unlike.emit();
      this.count--;
    }
  }
}
