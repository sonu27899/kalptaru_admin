import { Component, OnInit,ViewChild } from '@angular/core';
import { orderstatus } from '../classes/order';
import { OrderService } from '../services/order.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { viewbill } from '../classes/viewbill';





@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  billarr:viewbill[]=[];
  i:number;
  orderarr:orderstatus[]=[];
  n_flag:number=0;
  flag:number=0;
  displayedColumns: string[] = ['order_id','order_date','order_amount','fk_user_email','order_status','Delievery Assign To','More'];
  dataSource=new MatTableDataSource();

  constructor(private _ser:OrderService,public _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  onClick(item)
  {
    this._router.navigate(['menunav/:user_email/orderdetails',item.order_id]);
  }
  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
    
    this._ser.getAllOrder().subscribe(
      (data:any[])=>
      {


         for(this.i=0;this.i<data.length;this.i++)
         {

            if(data[this.i].order_status==1)
            {
              data[this.i].order_status='Vendor Recieved Order';
            }
            else if(data[this.i].order_status==2)
            {
              data[this.i].order_status='Product Dispatched';
            }
            else if(data[this.i].order_status==3)
            {
                data[this.i].order_status='Shipment';
            }
            else if(data[this.i].order_status==4)
            {
              data[this.i].order_status='Order Delivered';

            }

            if(data[this.i].delievery_assign=="")
            {
              this.n_flag=1;


            }
            else
            {
              this.flag=1;

            }
         }
        this.orderarr=data;
        this.dataSource.data=this.orderarr;
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
