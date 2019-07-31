import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { loan } from '../classes/loan';
import { WithdrawloanreqService } from '../services/withdrawloanreq.service';
import { Router,ActivatedRoute } from '@angular/router';

export class reason{
  constructor(
    public rejected_reason:string,
    public loan_id:number){

  }
  
}
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(private _router:Router,public dialogRef: MatDialogRef<DialogboxComponent>, @Inject(MAT_DIALOG_DATA) public data: loan,private _withdrawamountservice:WithdrawloanreqService,private _ac:ActivatedRoute) { }
  loan_id:number;
  rejected_reason:string;
  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(item)
  {
    this.loan_id=item.loan_id;
    //console.log(item.loan_id);
    //console.log(item.loan_reason);
    this._withdrawamountservice.updateRejectedLoanReason(new reason(item.rejected_reason,item.loan_id)).subscribe(
      (data:any)=>
      {
        
        this.ngOnInit();
        //console.log(data);
      }
    );
    

    }
  ngOnInit() {
    //this.loan_id=data.loan_id;
  }

}
