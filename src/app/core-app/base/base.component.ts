import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Util } from 'src/app/helpers/utilities';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AppService } from 'src/app/app.service';



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
  status: any;
  list1 = [
    {name: "Marketing 1",value: "Marketing 1", link: "kpi-card1"},
    {name: "Marketing 2",value: "Marketing 2", link: "kpi-card2"},
    {name: "Marketing 3",value: "Marketing 3", link: "kpi-card3"},
  ]
  list2 = [
    {name: "Trends 1", value: "Trends 1"},
    {name: "Trends 2", value: "Trends 2"},
    {name: "Trends 3", value: "Trends 3"},
  ]
  list3 = [
    {name: "Country 1", value: "Country 1"},
    {name: "Country 2", value: "Country 2"},
  ]
  selected: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  loading: boolean = false;
  list:any = [];
 

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, 
    private msalService: MsalService, private app : AppService) {}

  ngOnInit(): void{ 
    this.firstPanelOpen = true
    this.name = this.app.helperService.getClientname()
    this.username = this.app.helperService.getEmail()
    this.status = this.app.helperService.getClientStatus()
    
    this.getSubs('marketing')
  }
  getLink(val: any){
      this.router.navigateByUrl('app/e-commerce-dashboard/kpi-cards/'+ val)  
  }

  getSubs(val: any){
    if(val == 'marketing'){
      this.list = this.list1
      this.selected = this.list[0].name
    }
    else if(val == 'trends'){
      this.list = this.list2
      this.selected = this.list[0].name
    }
    else if(val == 'country'){
      this.list = this.list3
      this.selected = this.list[0].name
    }
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
    this.app.logoutUser()
    // this.msalService.logout()
    
  }
  
  
}
