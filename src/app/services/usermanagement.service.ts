import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {user} from '../classes/user_tbl';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
  private url = url.endPoint+'user/';
  constructor(private _http:HttpClient) { }
  getAllUser(){
    return this._http.get(this.url);
  }
  getUserById(user_email:string){
    return this._http.get(this.url+user_email);
}
  updateUser(item:user)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url + item.user_email,body,{headers:head1});
  }

  deleteUser(item){
    return this._http.delete(this.url+item.user_email);
  }
}
