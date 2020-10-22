import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class MainService {

  constructor(protected http: HttpClient) {
  }

  get(uri: string, body: any): Promise<any> {
    body = body == null ? {}: body
    const pars = this.getUrlParams(body);
    return this.http.get(uri, {params: pars}).toPromise().then(res => res);
  }

  post(uri: string, body: any): Promise<any> {
    body = body == null ? {}: body;
    return this.http.post(uri, body).toPromise().then(res => res);
  }

  private getUrlParams(body: any): HttpParams {
    let params = new HttpParams();
    for (const key in body) {
      if (!body.hasOwnProperty(key)) {
        continue;
      }
      params = params.append(key, body[key]);
    }
    return params;
  }

}
