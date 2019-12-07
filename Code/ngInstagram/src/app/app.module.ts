import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { SideComponent } from './side/side.component';
import { InstaCommonModule } from './insta-common/insta-common.module';
import { FeedComponent } from './feed/feed.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    SideComponent,
    FeedComponent,
    RegistrationComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InstaCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
