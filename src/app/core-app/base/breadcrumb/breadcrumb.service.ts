import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

type breadcrumbData = {
  parent: string,
  parentLink: string,
  children: childData[]
 
}

type childData = {
  child?: string,
  childLink?: string,
}


@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  // private titleSubject = new BehaviorSubject<string>("Dashboard")
  private breadcrumbSub = new BehaviorSubject<breadcrumbData>(
    {
      parent: '',
      parentLink: '',
      children: []
    }
  )

  breadcrumbObs$ = this.breadcrumbSub.asObservable();

  constructor() {

  }

  changeTitle(title: string){
    // this.titleSubject.next(title)
  } 

  updateBreadcrumb(data: breadcrumbData){
    this.breadcrumbSub.next(data)
  }

  titleAsObs$(){
    // return this.titleSubject.asObservable();
  }


}
