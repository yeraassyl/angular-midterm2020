import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {AlbumComponent} from "./album/album.component";
import {UserComponent} from "./user/user.component";
import {PostComponent} from "./post/post.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'users/:id', component: UserComponent},
  {path: 'users', component: UsersComponent},
  {path: 'albums/:id/photos', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
