import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../services/leave.service';
import { leave } from '../classes/leave_class';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-accept-leave',
  templateUrl: './accept-leave.component.html',
  styleUrls: ['./accept-leave.component.css']
})
export class AcceptLeaveComponent implements OnInit {
  leave_id:number;
  leave_msg:string;
  leave_days:number;
  leave_from_date:Date;
  leave_to_date:Date;
  leave_name:string;
  employee_name:string;
  leave_status:string;
  LeaveArray:leave[]=[];
  constructor(private _leaveservice:LeaveService,private _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['leave_msg','leave_days','leave_from_date','leave_status'];
  dataSource=new MatTableDataSource(this.LeaveArray);

  BackLeaveReq()
  {
    this._router.navigate(['menunav/:user_email/leavemanagement']);
  }
  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._leaveservice.getAllLeaveStatus('accept').subscribe(
      (data:any)=>{
        this.LeaveArray=data;
        this.dataSource.data=this.LeaveArray; 
      console.log(this.LeaveArray);
      }
    );

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
