import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SongNotificationService } from '../song-notification.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() playingSong = false;
  song: string;
  addedSong: string;
  writeSong = false;
  songIndex: number = 0;
  @Input() songs: Array<string> = [];
  @Output() songChanged = new EventEmitter<string>();
  @Output() songAdded = new EventEmitter<string>();
  @Output() songDeleted = new EventEmitter<string>();

  constructor(private songNotification: SongNotificationService) { }

  ngOnInit() {
    // here we want to create some sort of "event listener"
    // we want to be notified when the playNext() and playPrevious() functions are called

    // inter component communication step 1:
    // register a listener for the events you are interested in
    this.songNotification.onNext().subscribe(() => {
      // inter component communication step 3: process the event
      // TODO verify array bounds (length)
      if (this.songIndex >= this.songs.length) {
        return;//ies din functie
      }
      this.songIndex++;
      this.songChanged.emit(this.songs[this.songIndex]);
    });
    this.songNotification.onPrevious().subscribe(() => {
      if (this.songIndex <= 0) {
        return;
      }
      this.songIndex--;
      this.songChanged.emit(this.songs[this.songIndex]);
    });
  }

  addSong() {
    this.writeSong = true;
  }

  added() {
    this.writeSong = false;
    this.songAdded.emit(this.addedSong);
    this.addedSong = '';
  }

  deleteSong() {
    this.songDeleted.emit();
  }

}
