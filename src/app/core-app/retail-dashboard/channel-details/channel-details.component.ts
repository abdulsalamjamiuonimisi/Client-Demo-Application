import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../base/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit {

  constructor(private breadcrumb: BreadcrumbService) {
    let history;
    this.breadcrumb.breadcrumbObs$.subscribe(
      (item)=>{
        history = item
      }
    )

    this.breadcrumb.updateBreadcrumb({
      parent: 'Channel Details',
      parentLink: 'retail-dashboard/channel-details',
      children: []
    })
   }

  ngOnInit(): void {
  }

}
