import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {employee} from '../classes/employee';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = url.endPoint+'employee/';
  constructor(private _http:HttpClient) { }
  getAllEmployee(){
    return this._http.get(this.url);
  }
  getEmployeeById(employee_email:string){
    return this._http.get(this.url+employee_email);
}
  addEmployee(item:employee)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }

  updateEmployee(item:employee)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url + item.employee_email,body,{headers:head1});
  }

  deleteEmployee(item){
    return this._http.delete(this.url+item.employee_email);
  }
}
