import { Component } from '@angular/core';
import { SongNotificationService } from './song-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'winamp';
  currentSong: string;

  constructor(private songNotification: SongNotificationService) {//private in constructor e o notatie - creez o proprietate cu numele songNotifiaction care va avea valoarea parametrului songNotifiation 
  //
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
}
