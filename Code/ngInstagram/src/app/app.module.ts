import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { SideComponent } from './side/side.component';
import { InstagramService } from './instagram.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InstagramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
