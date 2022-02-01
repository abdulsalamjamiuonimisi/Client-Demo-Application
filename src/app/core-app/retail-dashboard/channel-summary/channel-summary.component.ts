import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../base/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-channel-summary',
  templateUrl: './channel-summary.component.html',
  styleUrls: ['./channel-summary.component.scss']
})
export class ChannelSummaryComponent implements OnInit {

  constructor(private breadcrumb: BreadcrumbService) {
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'Channel Summary',
      parentLink: 'retail-dashboard/channel-summary',
      children: []
    })
  }

  ngOnInit(): void {
  }

}
