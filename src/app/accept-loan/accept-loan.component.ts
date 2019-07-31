import { Component, OnInit,ViewChild } from '@angular/core';
import { loan } from '../classes/loan';
import { WithdrawloanreqService } from '../services/withdrawloanreq.service';

import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-accept-loan',
  templateUrl: './accept-loan.component.html',
  styleUrls: ['./accept-loan.component.css']
})

export class AcceptLoanComponent implements OnInit {
  loan_id:number;
  loan_amount:number;
  fk_employee_email:string;
  loan_issued_date:Date;
  last_installment_date:Date;
  loan_status:string;
  loan_reason:string;
  loan_months:number;
  loanArray:loan[]=[];
  constructor(private _acceptservices:WithdrawloanreqService,private _router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'loan_amount','loan_issued_date','last_installment_date','loan_status'];
  dataSource=new MatTableDataSource(this.loanArray);

  BackReq()
  {
    this._router.navigate(['menunav/:user_email/withdrawloanreq']);
  }
  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._acceptservices.getAllLoanStatus('accept').subscribe(
      (data:any)=>{
        this.loanArray=data;
        this.dataSource.data=this.loanArray; 
        console.log(this.loanArray);
       
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
