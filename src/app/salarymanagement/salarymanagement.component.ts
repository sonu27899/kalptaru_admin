import { Component, OnInit,ViewChild } from '@angular/core';
import {employee } from '../classes/employee';
import { EmployeeService } from '../services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-salarymanagement',
  templateUrl: './salarymanagement.component.html',
  styleUrls: ['./salarymanagement.component.css']
})
export class SalarymanagementComponent implements OnInit {
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
  constructor(private _employeeservice:EmployeeService,private _router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'employee_name','employee_designation','employee_salary','employee_joining_date','salary_status'];
  dataSource=new MatTableDataSource(this.employee);
  DeleteEmployee(item)
  {
    this._employeeservice.deleteEmployee(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.deleteEmployeeArray.splice(this.deleteEmployeeArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        console.log(this.dataSource.data);
        this.dataSource.data=this.employee; 
      }
    )
  }
  UpadteEmployee(item:employee)
  {
    this._router.navigate(['menunav/:user_email/updateemployee',item.employee_email]);  
  }
  // EmployeeId(item:employee)
  // {
  //   this._employeeservice.getEmployeeById(item.employee_email).subscribe(
  //     (data:employee)=>{
  //          function daydiff(d1,d2){ 
  //          var days;
  //          var diffdays;
  //          days= (d2.getTime()-d1.getTime());
  //          diffdays=Math.ceil((days/(1000*3600*24)));
  //          return diffdays;
  //        }
  //        console.log(
  //          daydiff(new Date(data[0].employee_joining_date),
  //          new Date(Date.now()))
  //        );
  //        function monthDiff(d1, d2) {
  //          var months;
  //         months = (d2.getFullYear() - d1.getFullYear()) * 12;
  //         months -= d1.getMonth()+1 ;
  //          months += d2.getMonth();
  //          return months <= 0 ? 0 : months;
  //      }    
  //    console.log(
  //       monthDiff(
          
  //         new Date(data[0].employee_joining_date), 
  //          new Date(Date.now())  
  //      )
  //    );      
        
  //     }
  // );
  // this._router.navigate(['/removeemployee',item.employee_email]);
  // }
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
