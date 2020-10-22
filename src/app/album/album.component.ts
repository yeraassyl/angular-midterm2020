import { Component, OnInit } from '@angular/core';
import {Photo} from "../shared/model/models";
import {ActivatedRoute} from "@angular/router";
import {ProviderService} from "../shared/service/provider.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public pathParams;
  public photos: Photo[] = [];
  constructor(private route: ActivatedRoute, private provider: ProviderService) {
    this.route.params.subscribe(params => this.pathParams = params);
  }

  ngOnInit(): void {
    this.provider.getPhotos(this.pathParams.id).then(res => this.photos = res);
  }

}
