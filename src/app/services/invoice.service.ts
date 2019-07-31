import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private url = url.endPoint+'customerInvoice/';
  constructor(private _http:HttpClient) { }
  getAllCustomerInvoice(){
    return this._http.get(this.url);
  }
  getProductByCategoryId(category_id){
    return this._http.get(this.url+category_id);
  }
  addCustomerInvoice(item)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
}
