import { Component, OnInit,ViewChild } from '@angular/core';
import { user } from '../classes/user_tbl';
import { UsermanagementService } from '../services/usermanagement.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
   user_email:String;
   user_password:String;
   user_name:String;
   user_mobileno:number;
   user_city:String;
   user_gender:String;
   user_address:String;
   user_type:number;

   user:user[]=[];
   deleteUserArray:user[]=[];
  constructor(private _userservice:UsermanagementService,private _router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['user_email', 'user_name','user_city','user_gender','user_mobileno'];
  dataSource=new MatTableDataSource(this.user);

  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._userservice.getAllUser().subscribe(
      (data:any)=>{
        this.user=data;
        this.dataSource.data=this.user; 
      }
    );
  }
  UpdateUser(item:user)
  {
    this._router.navigate(['menunav/:user_email/updateuser',item.user_email]);  
  }
   DeleteUser(item)
   {
     this._userservice.deleteUser(item).subscribe(
       (data:any)=>{
         this.deleteUserArray.splice(this.deleteUserArray.indexOf(item),1);
         this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
         this.dataSource.data=this.user; 
       }
     )
   }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
