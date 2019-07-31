import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private countUser = url.endPoint+'countuser/';
  private countProduct = url.endPoint+'countproduct/';
  private countEmployee = url.endPoint+'countEmployee/';
  private countCategory = url.endPoint+'countCategory/';
  private productByCategoryId = url.endPoint+'userproductByCategoryId/';
  constructor(private _http:HttpClient) { }
  CountUser(){
    return this._http.get(this.countUser);
  }
  CountProduct(){
    return this._http.get(this.countProduct);
  }
  CountEmployee(){
    return this._http.get(this.countEmployee);
  }
  CountCategory(category_id:number){
    return this._http.get(this.countCategory+category_id);
  }
  ProductByCategoryId(fk_category_id:number){
    return this._http.get(this.productByCategoryId+fk_category_id);
  }
}
