import { Component, OnInit } from '@angular/core';
import { SongNotificationService } from './song-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'winamp';
  currentSong: string;
  songs: Array<string>;

  constructor(private songNotification: SongNotificationService) {//private in constructor e o notatie - creez o proprietate cu numele songNotifiaction care va avea valoarea parametrului songNotifiation 
    //
  }

  ngOnInit() {
    this.songs = ['Britney Spears - Oops!... I did it again',
      'Michael Jackson - In the closet',
      'Madonna - La isla bonita',
      'Christina Aguilera - Dirty',
      'No Doubt - Hella good'];
    this.currentSong = this.songs[0]
  }

  // inter component communication step 2:
  // trigger the event
  playPrevious() {
    console.log("Play previous");

    //    
    this.songNotification.playPrevious();
  }

  playNext() {
    console.log("Play next");

    this.songNotification.playNext();
  }

  onSongChanged(songName) {
    this.currentSong = songName;
  }

  onNewSong(newSong: string) {
    this.songs.push(newSong);
  }

  onDeleteSong() {
    this.songs.pop();
  }
}
