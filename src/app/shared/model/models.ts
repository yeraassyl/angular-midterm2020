export interface AuthResponse {
  access_token: string;
  username: string;
  userId: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
