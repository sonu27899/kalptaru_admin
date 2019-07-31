import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = url.endPoint+'order/';
  private userdetailsbyorder = url.endPoint+'userDetailByOrder/';
  private bill_details_url=url.endPoint+'orderDetail/';
  constructor(private _http:HttpClient) { }
  getAllOrder(){
    return this._http.get(this.url);
  }
  deleteOrder(item){
    return this._http.delete(this.url+item.order_id);
  }
  getUserDetailsByOrder(){
    return this._http.get(this.userdetailsbyorder);
  }
  getBillDetails(order_id)
  {
    return this._http.get(this.bill_details_url+order_id);
  }  
}
