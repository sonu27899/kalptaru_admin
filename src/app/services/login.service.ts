import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from '../classes/login';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = url.endPoint+'login/';
  constructor(private _http: HttpClient) { }
  getLoginByEmail(user_email:string){
    return this._http.get(this.url+user_email);
  }
  getLoginByEmailAndPassword(item:log)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }

}
