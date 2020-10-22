import { Component, OnInit } from '@angular/core';
import {ProviderService} from "../shared/service/provider.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public signUpName = '';
  public signUpPassword = '';
  public username = '';
  public password = '';
  public email = '';
  public isLogged = false;
  public loggedUsername = '';

  constructor(private provider: ProviderService) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.isLogged = true;
      this.loggedUsername = localStorage.getItem('username');
    }
  }

  logIn(): void {
    if (this.username !== '' && this.password !== '') {
      this.auth(this.username, this.password);
    }
  }

  signUp(): void {
    if (this.signUpName !== '' && this.email && this.signUpPassword !== '') {
      this.provider.signUp(this.signUpName, this.email, this.signUpPassword).then(res =>
        this.auth(this.signUpName, this.signUpPassword)
      );
    }
  }

  auth(username: string, password: string){
    this.provider.auth(username, password).then(r => {
      localStorage.setItem('token', r.access_token);
      localStorage.setItem('username', r.username);
      localStorage.setItem('userId', r.userId);
      this.isLogged = true;
      this.loggedUsername = r.username;
      this.signUpName = '';
      this.signUpPassword = '';
    })
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    this.isLogged = false;
  }
}
