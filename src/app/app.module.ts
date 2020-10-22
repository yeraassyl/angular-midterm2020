import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';
import {FormsModule} from "@angular/forms";
import { AlbumsComponent } from './albums/albums.component';
import { HeaderComponent } from './header/header.component';
import {ProviderService} from "./shared/service/provider.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./shared/service/interceptor";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    UsersComponent,
    UserComponent,
    AlbumComponent,
    AlbumsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
