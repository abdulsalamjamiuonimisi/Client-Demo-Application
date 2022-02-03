import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  loggedIn: boolean = false
  constructor( private router: Router, private msalService: MsalService) {

  }

  isLoggedIn() : boolean {
    return this.msalService.instance.getActiveAccount() != null
  }
  // login with popwindow of microsoft account
  login(){
    this.msalService.loginPopup().subscribe( (response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account)
      
      this.router.navigate(['/app/e-commerce-dashboard'])
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
