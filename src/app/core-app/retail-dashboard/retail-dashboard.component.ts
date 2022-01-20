import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../base/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-retail-dashboard',
  templateUrl: './retail-dashboard.component.html',
  styleUrls: ['./retail-dashboard.component.scss']
})
export class RetailDashboardComponent implements OnInit {

  constructor( private breadcrumb: BreadcrumbService) { 
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'Retail Dashboard',
      parentLink: 'retail-dashboard',
      children: []
    })
  }

  ngOnInit(): void {
  }

}
