import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbService } from '../../base/breadcrumb/breadcrumb.service';
import { IReportEmbedConfiguration, models, Page, Report, service, VisualDescriptor } from 'powerbi-client';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';

export interface ConfigResponse {
  Id: string;
  EmbedUrl: string;
  EmbedToken: {
    Token: string;
  };
}

@Component({
  selector: 'app-country-share',
  templateUrl: './country-share.component.html',
  styleUrls: ['./country-share.component.scss']
})
export class CountryShareComponent implements OnInit {

    isEmbedded = false;

     displayMessage = 'The report is bootstrapped. Click Embed Report button to set the access token.';

     reportClass = 'report-container';  

    
    



     

  @ViewChild(PowerBIReportEmbedComponent) reportObj!: PowerBIReportEmbedComponent;


  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    id: '83ae27b9-422b-4ec2-8c48-714120e3a6dc',
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=042b6309-6539-48ff-967c-640fb4c8913e&groupId=ad414d89-5f10-43b1-8af7-a86dbb564d1a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiYW5ndWxhck9ubHlSZXBvcnRFbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwWm9uZVBhdGNoIjp0cnVlfX0%3d,',
    tokenType: models.TokenType.Aad,
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjc5ZDkzNjctYmQzZi00NWYxLTk2MTMtOGJhMjQzMDZiODFlLyIsImlhdCI6MTY0MzYyMDYyNiwibmJmIjoxNjQzNjIwNjI2LCJleHAiOjE2NDM2MjYzMDAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMlpnWUJDUFowbHhXVmJ3TW4rL1U5eXVEd2MycXFVNDhrY1VTeVpzcTdQU21MU0lTUUVBIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjdmNTlhNzczLTJlYWYtNDI5Yy1hMDU5LTUwZmM1YmIyOGI0NCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiTXVoYW1tYWQiLCJnaXZlbl9uYW1lIjoiTWlqaW55YXdhIiwiaXBhZGRyIjoiMTk3LjIxMC43MS4xNTAiLCJuYW1lIjoiTWlqaW55YXdhIE11aGFtbWFkIiwib2lkIjoiZjE5YzgzYzMtZDBjYi00YzkyLWI0M2MtYzYwNzk5NDczMWMwIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTc2ODU0NzU1NS0zNjY2NzY1NDIzLTU5NjA3ODY3Ny0xMDkwNCIsInB1aWQiOiIxMDAzM0ZGRjlGMzJCOTM4IiwicmgiOiIwLkFRb0FaNU9kdHotOThVV1dFNHVpUXdhNEhuT25XWC12THB4Q29GbFFfRnV5aTBRS0FBOC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJWVmdzQ1dINFcwRWY3cWgtcE5oTGJ1MnhKYTZod2NWSXpIeVlUSU02T2RvIiwidGlkIjoiYjc5ZDkzNjctYmQzZi00NWYxLTk2MTMtOGJhMjQzMDZiODFlIiwidW5pcXVlX25hbWUiOiJNdWhhbW1hZC5NQGxpdmUudW5pYy5hYy5jeSIsInVwbiI6Ik11aGFtbWFkLk1AbGl2ZS51bmljLmFjLmN5IiwidXRpIjoiUFRzdUtnME14a2lINDRNWHhlZ3lBUSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.TH_66U3CvihEIfnSE0y7nemAgalDUXbJJqljs0KVHL2CiFvqGED33PhejxZ8Z7ynhllOz4DTUxwlmH-mDT2eFH-vx5Fseo8KyMr0Tz-ptBHc1J3aKFfGKGJmRleH_ZXz_FWZ78QJllqhyDFu3lYFqxQPGfjmDicirW2crmdkwscL43Fxyng_mgh04jyu4pT6Mxmgl3VCUDmG2VDohrfjDkzbHyh91h7t99-0DfaDx1iNiBadp9zAmY6eKopT6-x6mUHcxBnA-5O7xluhUZkfIEFB4gFwrNF81-lEn9Y5PcEkiyaqlITHJoTMfkOkocOtiZ7kxk30YdiDZWofOc2c4w',
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
      parent: 'Country Shares',
      parentLink: 'e-commerce-dashboard/country-share',
      children: []
    })
   }

  ngOnInit(): void {
    const output = document.getElementById('report-container');
    if(output) output.style.background = "red"
  }
  

}
