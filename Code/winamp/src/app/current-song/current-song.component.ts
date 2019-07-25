import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.scss']
})
export class CurrentSongComponent implements OnInit {
  @Input() currentSong: string;

  constructor() { }

  ngOnInit() {
  }

}
