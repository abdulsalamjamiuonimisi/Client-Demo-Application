import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { BehaviorSubject } from 'rxjs';

import { Constants } from './helpers/messages';
import { UtilService } from './services/util.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private profilePic: BehaviorSubject<any> = new BehaviorSubject<any>('');

  profileImage: string | ArrayBuffer = '';

  constructor(
    public snackBar:MatSnackBar,
    public helperService: UtilService,
    private router: Router,
    private msalService: MsalService
    
  ) { 
    this.checkLoginStatus()
  }
  
  setLoginStatus(){
    this.loginStatus.next(true)
    // this.getProfilePic()
  }

  logoutUser(){
    localStorage.clear()
    this.loginStatus.next(false)
    this.router.navigateByUrl('/');
  }

  loginObserverable(){
    return this.loginStatus.asObservable()
  }

  checkLoginStatus() {
    let login:any =  this.helperService.getFromStore(Constants.LOGIN_USER)
    
    if (login !== null) {
      this.loginStatus.next(true);
    
    }

    else {
      this.loginStatus.next(false);
    }
  }
}
