import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbService } from '../../base/breadcrumb/breadcrumb.service';


@Component({
  selector: 'app-country-share',
  templateUrl: './country-share.component.html',
  styleUrls: ['./country-share.component.scss']
})
export class CountryShareComponent implements OnInit {



  constructor(private breadcrumb: BreadcrumbService) {
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'Country Shares',
      parentLink: 'e-commerce-dashboard/country-share',
      children: []
    })
   }

  ngOnInit(): void {
   
  }
  

}
