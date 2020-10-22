import { Component, OnInit } from '@angular/core';
import {Post} from "../shared/model/models";
import {ActivatedRoute} from "@angular/router";
import {ProviderService} from "../shared/service/provider.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: Post;
  public comments: Comment[] = [];
  public pathParams;
  public commentName = '';
  public commentBody = '';

  constructor(private route: ActivatedRoute, private provider: ProviderService) {
    route.params.subscribe(params => this.pathParams = params);
  }

  ngOnInit(): void {
    this.provider.getPost(this.pathParams.id).then(res => this.post = res);
    this.provider.getComments(this.pathParams.id).then(res => this.comments = res);
  }

  comment(): void {
    this.provider.commentPost(
      this.commentName,
      this.commentBody,
      this.pathParams.id,
      localStorage.getItem('username')).then(res => {
        this.comments.push(res);
        alert("Вы оставили комментарий")
      });
  }

}
