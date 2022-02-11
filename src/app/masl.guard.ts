import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class MaslGuard implements CanActivate {
  LoginStatus: any;

  constructor(private msalService: MsalService, private router: Router, private app: AppService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if( this.msalService.instance.getActiveAccount() == null){
      this.msalService.logout()  
      return false 
    }else{
      return true;  
    }

    // if (this.LoginStatus) {
    //   return true;
    // }

    // else{
    //   this.router.navigateByUrl('/');
    //   return false;
    // }
   
  }

  ListentoLoginStatus() {
    this.app.loginObserverable().subscribe(res => {
      this.LoginStatus = res; 
    });
  }
  
}
