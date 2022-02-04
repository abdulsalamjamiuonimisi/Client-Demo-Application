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
    id: '83ae27b9-422b-4ec2-8c48-714120e3a6dc',
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=83ae27b9-422b-4ec2-8c48-714120e3a6dc&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVVUk9QRS1OT1JUSC1CLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiYW5ndWxhck9ubHlSZXBvcnRFbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwWm9uZVBhdGNoIjp0cnVlfX0%3d,',
    tokenType: models.TokenType.Aad,
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDY4YjkzMTEtMWZmNy00NDJkLWI2NmMtNjZhMDc2NTkwZDlkLyIsImlhdCI6MTY0MzYyMTQ4MiwibmJmIjoxNjQzNjIxNDgyLCJleHAiOjE2NDM2MjYyMDAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84VEFBQUFMNGszMXZLaC9sd2hBN3Z3bzNUNU1KRHYxM0FRUVZPTEIrWjM2N1M2TmpZPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI3ZjU5YTc3My0yZWFmLTQyOWMtYTA1OS01MGZjNWJiMjhiNDQiLCJhcHBpZGFjciI6IjIiLCJmYW1pbHlfbmFtZSI6IkNPTlZaIiwiZ2l2ZW5fbmFtZSI6Ikh1c3NhaW4iLCJpcGFkZHIiOiI4Ny4yMDAuMjkuMTYiLCJuYW1lIjoiSHVzc2FpbiBDT05WWiIsIm9pZCI6IjZiODExYjczLTlmZjAtNGU3ZS1hNjM0LWEwOTRiOWU3MGFmYyIsInB1aWQiOiIxMDAzMjAwMUIwNkU2QzA5IiwicmgiOiIwLkFUb0FFWk9MUnZjZkxVUzJiR2FnZGxrTm5Ra0FBQUFBQUFBQXdBQUFBQUFBQUFBNkFDdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJzWXZlSzllalhmaHlEZkdiLXZqaWdUMjBmT1NWYWVvVllodmpuZmJJUFpFIiwidGlkIjoiNDY4YjkzMTEtMWZmNy00NDJkLWI2NmMtNjZhMDc2NTkwZDlkIiwidW5pcXVlX25hbWUiOiJIdXNzYWluQGNvbnZ6LmNvbSIsInVwbiI6Ikh1c3NhaW5AY29udnouY29tIiwidXRpIjoidkVuVW1fLXpmazJRRVY3VEpFRXNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.wlUpypSW9K0EAwB_DxmrSr7pLQcLilOKpPz6oAqic0FP6gxAMomLkvGtnongTIXfL8kTrI4kYHYamJ1YzPm7nxgeekshOykng_H1byOaf1cKqNI19AlxmJfIFUgvefXS_pYkn65P1WLcbqPzg0RrKPe17jU-Qcq9fKtn-MMFyMRKL_gcc0zUpxm65iCeFYfijX_EEP3jVDzjZfXuoxgNlJCDK4ktwfd20bMtafQB6QH5GUqnKXZ5n1vPtvuDiamWgzRSidcVJ4f-T6NzJhjvOnXHSyZN02jh5J3cYHUMAYqqfP4szaCpQA6x3uaIRFxLWPzHQZ2rfO29YEYidh4w5g',
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
      parent: 'Marketing Model',
      parentLink: 'e-commerce-dashboard/kpi-cards',
      children: []
    })
   }

  ngOnInit(): void {
    
  }

}
