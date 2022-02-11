import { Injectable } from '@angular/core';
import { Constants } from '../helpers/messages';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  getEmail(): any {
    let rawid = this.getFromStore(Constants.LOGIN_USER);
    if(rawid){
      let email = rawid.username
      return email
    }
  }

  getRoles(): any {
    let rawid = this.getFromStore(Constants.LOGIN_USER);
    if(rawid){
      let role = rawid.roles
      return role
    }
  }

  public getClientname(){
    let usern = this.getFromStore(Constants.LOGIN_USER);
    if(usern){
      let name = usern.name
      return name
    }
  }

  public getClientStatus(){
    let usern = this.getFromStore(Constants.LOGIN_USER);
    if(usern){
      let status = usern.status
      return status
    }
  }

  constructor() {
  }
  
  

  public getFromStore(key:string){
    return JSON.parse(localStorage.getItem(key) || '{}')
  }

  public saveToStore(key:string, data:any){
    // let encrypt = this.aes.encrypt(JSON.stringify(data));
    localStorage.setItem(key, JSON.stringify(data));
  }

  public removeFromStore(key:string){
    localStorage.removeItem(key)
  }
  
}