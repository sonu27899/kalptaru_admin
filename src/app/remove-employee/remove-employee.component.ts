import { Component, OnInit,ViewChild } from '@angular/core';
import {employee } from '../classes/employee';
import { EmployeeService } from '../services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { EmptyOutletComponent } from '@angular/router/src/components/empty_outlet';
@Component({
  selector: 'app-remove-employee',
  templateUrl: './remove-employee.component.html',
  styleUrls: ['./remove-employee.component.css']
})
export class RemoveEmployeeComponent implements OnInit {
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
  salary_status:string;
  employee:employee[]=[];
  difference:Date;
  deleteEmployeeArray:employee[]=[];
  constructor(private _employeeservice:EmployeeService,private _router:Router,private _activatedroutes:ActivatedRoute) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // displayedColumns: string[] = [ 'employee_name','employee_designation','employee_salary','employee_joining_date','Action'];
  dataSource=new MatTableDataSource(this.employee);
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/salarymanagement']);
  }
  
  ngOnInit() {
    this.employee_email=this._activatedroutes.snapshot.params['employee_email'];
    
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator; 

    this._employeeservice.getEmployeeById(this.employee_email).subscribe(
      (data:employee[])=>{
        this.employee_email=data[0].employee_email;
        // this.employee_password=data[0].employee_password;
        this.employee_name=data[0].employee_name;
        this.employee_joining_date=data[0].employee_joining_date;
        this.employee_salary=data[0].employee_salary;
        this.employee_designation=data[0].employee_designation;
        this.employee_mobileno=data[0].employee_mobileno;
        this.employee_city=data[0].employee_city;
        this.employee_gender=data[0].employee_gender;
        this.employee_address=data[0].employee_address;
        this.salary_status=data[0].salary_status;
        function monthDiff(d1, d2) {
                  var months;
                 months = (d2.getFullYear() - d1.getFullYear()) * 12;
                 months -= d1.getMonth()+1 ;
                  months += d2.getMonth();
                  return months <= 0 ? 0 : months;
              }    
                  this.difference=monthDiff(new Date(data[0].employee_joining_date),(new Date(Date.now())));
                  
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


