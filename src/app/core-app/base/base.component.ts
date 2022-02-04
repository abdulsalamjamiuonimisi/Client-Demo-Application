import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Util } from 'src/app/helpers/utilities';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';



@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  menus = Util.sidebarMenu
  drawerOpen = true;
  open: boolean = false
  panelOpenState = false; 
  firstPanelOpen : any;
  change: any;

  username: any;
  name: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  loading: boolean = false;
 

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, 
    private msalService: MsalService) {}

  ngOnInit(): void{ 
    this.firstPanelOpen = true
    this.name = this.msalService.instance.getActiveAccount()?.name
    this.username = this.msalService.instance.getActiveAccount()?.username
  }

  
  
  goToProfile(){
  }
  isChange1(){
    this.change = "commerce"
    const output = document.getElementById('side-menu3');
    if(output) output.style.display = "block"
  }
  hideChange1(){
    this.change = "hidecommerce"
    const output = document.getElementById('side-menu3');
    if(output) output.style.display = "none"
  }
  isChange2(){
    this.change = "sass"
    const output = document.getElementById('side-menu2');
    if(output) output.style.display = "block"
  }
  hideChange2(){
    this.change = "hidesass"
    const output = document.getElementById('side-menu2');
    if(output) output.style.display = "none"
  }
  isChange3(){
    this.change = "retail"
  
    const output = document.getElementById('side-menu');
    if(output) output.style.display = "block"
  }
  hideChange3(){
    this.change = "hideretail"
  
    const output = document.getElementById('side-menu');
    if(output) output.style.display = "none"
  }
  isOpen(){
    this.open = !this.open
  }
  logout(){
    // this.msalService.logout()
    this.router.navigateByUrl('/') 
  }
  
  
}
