import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbService } from '../../base/breadcrumb/breadcrumb.service';
import { IReportEmbedConfiguration, models, Page, Report, service, VisualDescriptor } from 'powerbi-client';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';

@Component({
  selector: 'app-kpi-cards',
  templateUrl: './kpi-cards.component.html',
  styleUrls: ['./kpi-cards.component.scss']
})
export class KpiCardsComponent implements OnInit {
  isEmbedded = false;

  displayMessage = 'The report is bootstrapped. Click Embed Report button to set the access token.';

  reportClass = 'report-container';  

@ViewChild(PowerBIReportEmbedComponent) reportObj!: PowerBIReportEmbedComponent;


reportConfig: IReportEmbedConfiguration = {
 type: 'report',
 id: 'paste report id here',
 embedUrl: 'paste embedurl here',
 tokenType: models.TokenType.Aad,
 accessToken: 'paste token here',
 settings: {
         panes: {
             filters: {
                 expanded: false,
                 visible: false
             }
         },
         background: models.BackgroundType.Transparent,
 }
};

 eventHandlersMap = new Map<string, (event?: service.ICustomEvent<any>) => void>([
 ['loaded', () => console.log('Report has loaded')],
 [
   'rendered',
   () => {
     console.log('Report has rendered');

     // Set displayMessage to empty when rendered for the first time
     if (!this.isEmbedded) {
       this.displayMessage = 'Use the buttons above to interact with the report using Power BI Client APIs.';
     }

     // Update embed status
     this.isEmbedded = true;
   },
 ],
 [
   'error',
   (event?: service.ICustomEvent<any>) => {
     if (event) {
       console.error(event.detail);
     }
   },
 ],
 ['visualClicked', () => console.log('visual clicked')],
 ['pageChanged', (event) => console.log(event)],
]);

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
