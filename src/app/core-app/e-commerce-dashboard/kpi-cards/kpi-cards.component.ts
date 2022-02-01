import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../base/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-kpi-cards',
  templateUrl: './kpi-cards.component.html',
  styleUrls: ['./kpi-cards.component.scss']
})
export class KpiCardsComponent implements OnInit {

  itemList = [
    {name: 'Book'}, 
    {name: 'Pen'},
    {name: 'Car'}
  ]

  constructor(private breadcrumb: BreadcrumbService) {
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'KPI Cards',
      parentLink: 'e-commerce-dashboard/kpi-cards',
      children: []
    })
   }

  ngOnInit(): void {
    
  }

}
