import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Util } from 'src/app/helpers/utilities';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  menus = Util.sidebarMenu
  drawerOpen = true;
  open: boolean = false

 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  loading: boolean = false;
 

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit(): void{ 
    
  }
  
  goToProfile(){
    

  }
  isOpen(){
    this.open = !this.open
  }
  landingPage(){
    this.router.navigate(['/'])
  }
  
  
}
