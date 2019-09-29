import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private token: string;

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
    this.httpClient.post();
  }

  getLikes(postId: string) {
    // this.httpClient.get()
  }

  getFeed() {

  }

  like(postId: string) {

  }

  unlike(postId: string) {
    
  }
}
