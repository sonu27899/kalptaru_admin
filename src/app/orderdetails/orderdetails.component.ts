import { Component, OnInit,ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { bill_details } from '../classes/bill_details';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { OrderService } from '../services/order.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  id:number;
  details_arr:bill_details[]=[];
  category_name:string[]=["ACCENT CHAIRS","TV UNITS"];
  i:number;
  displayedColumns: string[] = ['fk_bill_id','product_name','category_name','bill_price','bill_qty'];
  dataSource=new MatTableDataSource();
  dataSource1=new MatTableDataSource();
  constructor(public _actroute:ActivatedRoute,public _ser:OrderService,public _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this.id=this._actroute.snapshot.params['order_id'];
    console.log(this.id)
    this._ser.getBillDetails(this.id).subscribe(
      (data:bill_details[])=>
      {
        this.details_arr=data;
        console.log(this.details_arr)

        this.dataSource.data=this.details_arr;

      }
    );
  }
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/order']);
  }
applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
