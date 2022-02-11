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

  list4 = [
    {name: "Coupon Summary 1", value: "Coupon Summary 1"},
    {name: "Coupon Summary 2", value: "Coupon Summary 2"},
    {name: "Coupon Summary 3", value: "Coupon Summary 3"},
  ]
  list5 = [
    {name: "Coupon Details 1", value: "Coupon Details 1"},
    {name: "Coupon Details 2", value: "Coupon Details 2"},
    {name: "Coupon Details 3", value: "Coupon Details 3"},
  ]
  list6 = [
    {name: "Channel Summary 1", value: "Channel Summary 1"},
    {name: "Channel Summary 2", value: "Channel Summary 2"},
    {name: "Channel Summary 3", value: "Channel Summary 3"},
  ]
  list7 = [
    {name: "Channel Details 1", value: "Channel Details 1"},
    {name: "Channel Details 2", value: "Channel Details 2"},
    {name: "Channel Details 3", value: "Channel Details 3"},
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
    
   

    if(this.status === 'admin'){
      this.getSubs('marketing')
    }else if(this.status === 'user') {
      this.getSubs('coupon-summary')
    }
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
    }else if(val == 'coupon-summary'){
      this.list = this.list4
      this.selected = this.list[0].name
    }else if(val == 'coupon-details'){
      this.list = this.list5
      this.selected = this.list[0].name
    }else if(val == 'channel-summary'){
      this.list = this.list6
      this.selected = this.list[0].name
    }else if(val == 'channel-details'){
      this.list = this.list7
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
