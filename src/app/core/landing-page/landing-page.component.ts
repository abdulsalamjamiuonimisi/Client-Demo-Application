import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { AppService } from 'src/app/app.service';
import { Constants, MessageUtil } from 'src/app/helpers/messages';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  loggedIn: boolean = false
  username: any;
  name: any;
  temp: any;
  store: any;
  constructor( private router: Router, private msalService: MsalService, private app: AppService) {

  }

  isLoggedIn() : boolean {
    return this.msalService.instance.getActiveAccount() != null
  }
  // login with popwindow of microsoft account
  login(){
    this.msalService.loginPopup().subscribe( (response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account)
      console.log("successful")
      this.username = this.msalService.instance.getActiveAccount()?.username
      this.name = this.msalService.instance.getActiveAccount()?.name
      // this.router.navigate(['/app/e-commerce-dashboard'])  
      this.temp = this.username.split('@');
      if(this.temp[1] === 'convz.com'){
        this.store = 
          {username: this.username, name: this.name, status: 'admin',
          roles: ['ecommerce', 'retail','sass']}
          this.router.navigate(['/app/e-commerce-dashboard'])  
      }else{
        this.store = 
          {username: this.username, name: this.name, status: 'user',
          roles:['retail','sass']}
          this.router.navigate(['/app/sass-dashboard'])  
      }
      this.app.helperService.saveToStore(Constants.LOGIN_USER,this.store);
      this.app.setLoginStatus()

    }) 
    
    
  }

  logout(){
    this.msalService.logout()
  }

  //login with redirect windown to microsoft account
  loginRedirect(){
    this.msalService.loginRedirect();
  }
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      res => {
        if(res != null && res.account != null) {
          this.msalService.instance.setActiveAccount(res.account)
        }
      }
    )
  }

  openApp(){
    this.router.navigate(['/app/e-commerce-dashboard'])
  }

}
