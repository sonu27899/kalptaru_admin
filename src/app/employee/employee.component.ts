import { Component, OnInit,ViewChild } from '@angular/core';
import {employee } from '../classes/employee';
import { EmployeeService } from '../services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   employee_email:string;
   employee_password:string;
   employee_name:string;
   employee_joining_date:Date;
   employee_salary:number;
   employee_designation:string;
   employee_mobileno:number;
   employee_city:string;
   employee_gender:string;
   employee_address:string;
   employee_type:number;
   employee:employee[]=[];
   deleteEmployeeArray:employee[]=[];
   f:number=0;
  constructor(private _employeeservice:EmployeeService,private _router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'employee_name','employee_designation','employee_joining_date','employee_salary','employee_gender','Action'];
  dataSource=new MatTableDataSource(this.employee);
  EmployeePage()
  {
    this._router.navigate(['menunav/:user_email/addemployee']);  
  }
  UpdateEmployee(item:employee)
  {
    console.log(item.employee_email)
    this._router.navigate(['menunav/:user_email/updateemployee',item.employee_email]);  
  }
  DeleteEmployee(item)
  {
    this._employeeservice.deleteEmployee(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.deleteEmployeeArray.splice(this.deleteEmployeeArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        console.log(this.dataSource.data);
        this.dataSource.data=this.employee; 
        alert("Deleted Successfully");
      }
    )
  }
  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._employeeservice.getAllEmployee().subscribe(
      (data:any)=>{
        this.employee=data;
        this.dataSource.data=this.employee; 
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
