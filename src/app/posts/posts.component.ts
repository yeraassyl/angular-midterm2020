import {Component, OnInit, Provider} from '@angular/core';
import {Post, User} from "../shared/model/models";
import {ProviderService} from "../shared/service/provider.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[] = [];
  public users: User[] = [];
  public postTitle = '';
  public postBody = '';
  public postAuthor = '';

  constructor(private service: ProviderService) {
  }

  ngOnInit(): void {
    this.service.getPosts().then(res => this.posts = res);
    this.service.getUsers().then(res => this.users = res);
  }

  createPost(): void {
    if (this.postTitle !== '' && this.postBody !== '') {
      this.service.createPost(
        this.postTitle,
        this.postBody,
        parseInt(localStorage.getItem('userId'), 10)).then(res => {
          this.postTitle = '';
          this.postBody = '';
          this.posts.push(res);
        });
    }
  }

  filter(): void {
    if (this.postAuthor !== ''){
      const id = this.users
        .filter(user => user.username === this.postAuthor)[0].id;
      this.service.filterPosts(id).then(res => {
        this.posts = res;
        this.postAuthor = '';
      });
    }
  }
}
