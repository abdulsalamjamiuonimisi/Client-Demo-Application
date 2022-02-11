import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  accepted: boolean = false;
  canAccess: any;
  constructor(private app: AppService, private msalService: MsalService, private router: Router){}
  roles: any = this.app.helperService.getRoles()
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    
    var roles = route.data.roles;
    this.canAccess = this.hasAccess(roles)
    console.log(this.canAccess, 'am i accepted?');
    
    if(!this.canAccess){
      localStorage.clear()
      this.router.navigateByUrl('/')
    }

    return this.canAccess;
  }

  hasAccess(role: any){
    console.log(role)
    if(this.roles !== undefined){
      let roles = this.roles;
      for (let i = 0; i < roles.length; i++) {
        for (let k = 0; k < role.length; k++) {
          if(roles[i] === role[k]){
            return true
          }
        }
      }
    }else{
      this.roles = 'empty'
    }
    return
  }
  
}
