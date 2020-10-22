import { Component, OnInit } from '@angular/core';
import {Album, User} from "../shared/model/models";
import {ProviderService} from "../shared/service/provider.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public albums: Album[] = [];
  constructor(private provider: ProviderService) { }

  ngOnInit(): void {
    this.provider.getUsers().then(res => this.users = res);
    this.provider.getAllAlbums().then(res => this.albums = res);
  }

}
