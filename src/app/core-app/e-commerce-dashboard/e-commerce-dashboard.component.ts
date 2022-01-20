import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../base/breadcrumb/breadcrumb.service';


@Component({
  selector: 'app-e-commerce-dashboard',
  templateUrl: './e-commerce-dashboard.component.html',
  styleUrls: ['./e-commerce-dashboard.component.scss']
})
export class ECommerceDashboardComponent implements OnInit {

  constructor( private breadcrumb: BreadcrumbService) {
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'E-Commerce Dashboard',
      parentLink: 'e-commerce-dashboard',
      children: []
    })
   }

  ngOnInit(): void {
  }

}
