import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Post} from "./models";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private client: HttpClient) { }

  BASE_URL = 'https://jsonplaceholder.typicode.com';


  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }

  addPost(post: Post): Observable<any> {
    return this.client.post(`${this.BASE_URL}/posts`, post);
  }

  updatePost(album: Post): Observable<Post> {
    return this.client.put<Post>(`${this.BASE_URL}/posts/${album.id}`, album);
  }

  deletePost(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/posts/${id}`);
  }

}
