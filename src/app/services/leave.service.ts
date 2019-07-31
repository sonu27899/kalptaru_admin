import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { leave } from '../classes/leave_class';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private url = url.endPoint+'leaveManagement/';
  private leave = url.endPoint+'leave/';
  private rejectleave = url.endPoint+'rejectLeave/';
  
  constructor(private _http:HttpClient) { }
  getAllLeaveEmployee(){
    return this._http.get(this.leave);
  }
  updateRejectedLeaveStatus(leave_id)
  {
      const head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.rejectleave+leave_id,{headers:head1});
  }
  updateLeaveStatus(leave_id)
  {
      const head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.url+leave_id,{headers:head1});
  }
  deleteLeaveReq(item:leave){
    return this._http.delete(this.url+item.leave_id);
  }
  getAllLeaveStatus(item){
    return this._http.get(this.url+item.leave_status);
  }
  
}
