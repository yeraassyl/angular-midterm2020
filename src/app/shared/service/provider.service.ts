import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MainService} from './main.service';
import {Album, AuthResponse, Photo, Post, User} from "../model/models";

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  private baseUrl: string = "http://localhost:3000";
  constructor(http: HttpClient) {
    super(http);
  }

  auth(username: string, password: string): Promise<AuthResponse> {
    return this.post(this.baseUrl + '/sign-in', {
      username,
      password
    });
  }

  signUp(username: string, email: string, password: string): Promise<AuthResponse> {
    return this.post(this.baseUrl + '/users', {
      username,
      email,
      password
    });
  }

  getPosts(): Promise<Post[]> {
    return this.get(this.baseUrl + '/posts', {});
  }

  createPost(title: string, body: string, userId: number): Promise<Post> {
    return this.post(this.baseUrl + '/posts', {
      title,
      body,
      userId
    });
  }

  getPost(id: number): Promise<Post> {
    return this.get(this.baseUrl + `/posts/${id}`, {});
  }

  getComments(postId: number): Promise<Comment[]> {
    return this.get(this.baseUrl + `/posts/${postId}/comments`, {});
  }

  commentPost(name: string, body: string, postId: number, email: string): Promise<Comment> {
    return this.post(this.baseUrl + '/comments', {
      name,
      body,
      postId,
      email
    });
  }

  getUsers(): Promise<User[]> {
    return this.get(this.baseUrl + '/users', {});
  }

  getUser(id: number): Promise<User> {
    return this.get(this.baseUrl + `/users/${id}`, {});
  }

  getAllAlbums(): Promise<Album[]>{
    return this.get(this.baseUrl + `/albums`, {});
  }

  getAlbums(userId: number): Promise<Album[]> {
    return this.get(this.baseUrl + `/users/${userId}/albums`, {});
  }

  getPhotos(albumId: number): Promise<Photo[]> {
    return this.get(this.baseUrl + `/albums/${albumId}/photos`, {});
  }

  filterPosts(userId: number): Promise<Post[]> {
    return this.get(this.baseUrl, {userId});
  }
}
