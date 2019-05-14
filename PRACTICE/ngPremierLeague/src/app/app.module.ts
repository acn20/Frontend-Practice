import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsComponent } from './standings/standings.component';
import { StandingsItemComponent } from './standings-item/standings-item.component';
import { HeadingComponent } from './heading/heading.component';
import { ResultMarkerComponent } from './result-marker/result-marker.component';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    StandingsItemComponent,
    HeadingComponent,
    ResultMarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
