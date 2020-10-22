import { Component, OnInit } from '@angular/core';
import {Album, User} from "../shared/model/models";
import {ProviderService} from "../shared/service/provider.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;
  public albums: Album[] = [];
  public pathParams;
  constructor(private route: ActivatedRoute, private provider: ProviderService) {
    route.params.subscribe(params => this.pathParams = params);
  }

  ngOnInit(): void {
    this.provider.getUser(this.pathParams.id).then(res => this.user = res);
    this.provider.getAlbums(this.pathParams.id).then(res => this.albums = res);
  }

}
