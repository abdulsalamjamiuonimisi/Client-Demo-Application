import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../base/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-sass-dashboard',
  templateUrl: './sass-dashboard.component.html',
  styleUrls: ['./sass-dashboard.component.scss']
})
export class SassDashboardComponent implements OnInit {

  constructor(private breadcrumb: BreadcrumbService) { 
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'SASS Dashboard',
      parentLink: 'sass-dashboard',
      children: []
    })
  }

  ngOnInit(): void {
  }

}
