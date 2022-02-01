import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../base/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.scss']
})
export class CouponDetailsComponent implements OnInit {

  constructor(private breadcrumb: BreadcrumbService) { 
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'Coupon Details',
      parentLink: 'sass-dashboard/coupon-details',
      children: []
    })
  }

  ngOnInit(): void {
  }

}
