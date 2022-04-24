import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'link-shortner';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard  = false;
  showModeratorBoard = false;
  email?:string;
  constructor(private tokenStoragerService: TokenStorageService){}
  ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStoragerService.getToken();
      if(this.isLoggedIn){
        const user = this.tokenStoragerService.getUser();
        this.roles = user.roles;
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
        this.email= user.email;
      }
  }
  logout(): void {
    this.tokenStoragerService.signOut();
    window.location.reload();
  }
}
