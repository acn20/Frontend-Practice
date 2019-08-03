import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { CounterComponent } from './counter/counter.component';
import { ResultComponent } from './result/result.component';
import { ClickerComponent } from './clicker/clicker.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CounterComponent,
    ResultComponent,
    ClickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
