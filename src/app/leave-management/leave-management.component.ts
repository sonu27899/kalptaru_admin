import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../services/leave.service';
import { leave } from '../classes/leave_class';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { timer } from 'rxjs';
@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit {
  postsSubscription:any;
  timespan:any;
  leave_id:number;
  leave_msg:string;
  leave_days:number;
  leave_from_date:Date;
  leave_to_date:Date;
  leave_name:string;
  employee_name:string;
  leave_status:string;
  LeaveArray:leave[]=[];
  DeleteLeaveArray:leave[]=[];
  constructor(private _leaveservice:LeaveService,private _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['leave_msg','leave_days','leave_from_date','leave_status','Action'];
  dataSource=new MatTableDataSource(this.LeaveArray);
  UpdateLeaveRejectStatus(element)
  {
    this._leaveservice.updateRejectedLeaveStatus(element.leave_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.ngOnInit();
      }
    )
  }
  UpdateLeaveStatusReq(element){
    this._leaveservice.updateLeaveStatus(element.leave_id).subscribe(
      (data:any)=>{
        console.log(data);
           this.ngOnInit();
      }
    );
  }
  AcceptLeaveReq(){
    this._router.navigate(['menunav/:user_email/acceptLeave']);
  }
  DeleteLeaveRecordReq(element){
    this._leaveservice.deleteLeaveReq(element).subscribe(
      (data:any)=>{
        console.log(data);
        this.DeleteLeaveArray.splice(this.DeleteLeaveArray.indexOf(element),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(element),1);
        console.log(this.dataSource.data);
        this.dataSource.data=this.LeaveArray; 
        alert("Deleted successfully");
      }
    )
  }
  private subscribeToData(): void {

    this.timespan = timer(5000)
      .subscribe(() => this.refreshData());
  }
  refreshData(){
    this.postsSubscription = this._leaveservice.getAllLeaveEmployee().subscribe(

      (data: leave[]) => {
        this.LeaveArray = data;
        this.dataSource.data=this.LeaveArray; 
        this.subscribeToData();
      },
      function (error) {
        console.log(error);
      },
      function () {
        
        console.log("complete");
      }
    );
  }
  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this.refreshData();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
