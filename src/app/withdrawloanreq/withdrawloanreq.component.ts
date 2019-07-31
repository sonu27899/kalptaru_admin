import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import { loan } from '../classes/loan';
import { WithdrawloanreqService } from '../services/withdrawloanreq.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export class reason{
  constructor(public loan_id:number,
    public rejected_reason:string){

  }
}

@Component({
  selector: 'app-withdrawloanreq',
  templateUrl: './withdrawloanreq.component.html',
  styleUrls: ['./withdrawloanreq.component.css']
})
export class WithdrawloanreqComponent implements OnInit {
  loan_id:number;
  loan_amount:number;
  fk_employee_email:string;
  loan_issued_date:Date;
  last_installment_date:Date;
  loan_status:string;
  loan_reason:string;
  loan_months:number;
  loanArray:loan[]=[];
  deleteLoanArray:loan[]=[];
  rejected_reson:string;
  constructor(private _withdrawamountservice:WithdrawloanreqService,private _router:Router,public dialog: MatDialog) { }
  @Inject(MAT_DIALOG_DATA) public data: loan;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'loan_amount','loan_issued_date','last_installment_date','loan_status','Action'];
  dataSource=new MatTableDataSource(this.loanArray);
  

  AcceptLoanReq()
  {
    this._router.navigate(['menunav/:user_email/AcceptLoan']);
  }
  UpdateLoanReq(item)
  {
    this._withdrawamountservice.updateLoanStatus(item.loan_id).subscribe(
      (data:any)=>{
        console.log(data);
           this.ngOnInit();
      }
   )  

  //  this._withdrawamountservice.deleteLoanFromUpdate(item).subscribe(
  //   (data:any)=>{
  //     console.log(data);
  //     this.deleteLoanArray.splice(this.deleteLoanArray.indexOf(item),1);
  //     this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
  //     this.dataSource.data=this.loanArray; 
  //     alert("Loan Status Is Accepted....");
  //   }
  // )

  }
  UpdateLoanReqReject(item)
  {
    
    this._withdrawamountservice.getLoanId(item.loan_id).subscribe(
      (data:any)=>{
        this.loan_id=data[0].loan_id;
        const dialogRef = this.dialog.open(DialogboxComponent, {
          width: '250px',
          
          data: { loan_reason: this.loan_reason,loan_id:this.loan_id}
        });
      
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.loan_reason = result;
          this.loan_id=result;
        });
        //console.log(this.loan_id);
      }
    );
    //console.log(this.loan_id);
   
    //console.log(item.loan_reason);
    //console.log(item.loan_id);
  
  }
  DeleteLoanReq(item)
  {
    this._withdrawamountservice.deleteLoanReq(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.deleteLoanArray.splice(this.deleteLoanArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        console.log(this.dataSource.data);
        this.dataSource.data=this.loanArray; 
        alert("Deleted successfully");
      }
    )
  }
  
  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._withdrawamountservice.getAllLoanReq().subscribe(
      (data:any)=>{
        this.loanArray=data;
        this.dataSource.data=this.loanArray; 
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


