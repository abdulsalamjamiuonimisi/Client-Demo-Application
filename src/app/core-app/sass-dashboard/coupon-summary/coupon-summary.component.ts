import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../base/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-coupon-summary',
  templateUrl: './coupon-summary.component.html',
  styleUrls: ['./coupon-summary.component.scss']
})
export class CouponSummaryComponent implements OnInit {

  constructor(private breadcrumb: BreadcrumbService) {
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'Coupon Summary',
      parentLink: 'sass-dashboard/coupon-summary',
      children: []
    })
   }

  ngOnInit(): void {
  }

}
