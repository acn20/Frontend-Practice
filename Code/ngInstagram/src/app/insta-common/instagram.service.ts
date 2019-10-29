import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//HttpClient e o clasa care locuieste in HttpClientModule
import { Like } from './like';
import { Observable } from 'rxjs';
import { Post } from './post';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private token: string;

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
  }

  getLikes(postId: string): Observable<Array<Like>> {
    return this.httpClient.get<Array<Like>>('http://localhost:3000/posts/likes');
  }

  getComments(postId: string): Observable<Array<Comment>> {
    return this.httpClient.get<Array<Comment>>('http://localhost:3000/posts/comments');
  }

  getPost(postId: string): Observable<Post> {
    return this.httpClient.get<Post>('http://localhost:3000/posts');
  }
  
  getFeed(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>('http://localhost:3000/posts');
  }

  getUserPosts(userId: string): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>('http://localhost:3000/posts');
  }
}