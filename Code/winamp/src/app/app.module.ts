import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CurrentSongComponent } from './current-song/current-song.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SongNotificationService } from './song-notification.service'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CurrentSongComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ SongNotificationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
