import { Component, OnInit } from '@angular/core';
import { employee } from '../../classes/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
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

  addEmployeeArray:employee[]=[];
  gender_arr:string[]=["male","female","others"];
  designation_arr:string[]=["Manager","Delivery_Boy","Cashier","Worker"];
  city_arr:string[]=["Ahmedabad","Surat","Vadodara","Aanand","Rajasthan"];
  constructor(private _employeeservice:EmployeeService,private _router:Router) { }
  onAddEmployeeButton()
  {
    const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
    const control1 = new FormControl('1', Validators.pattern('[0-9 ]*'));
    console.log(control.errors);
    console.log(control1.errors);
    
    this._employeeservice.addEmployee(new employee(this.employee_email,this.employee_name,this.employee_joining_date,this.employee_salary,this.employee_designation,this.employee_mobileno,this.employee_city,this.employee_gender,this.employee_address,this.salary_status)).subscribe(
        (data:any)=>{
            console.log(data);
            this.addEmployeeArray.push(new employee(this.employee_email,this.employee_name,this.employee_joining_date,this.employee_salary,this.employee_designation,this.employee_mobileno,this.employee_city,this.employee_gender,this.employee_address,this.salary_status));
            alert("successfully added");
            this._router.navigate(['menunav/:user_email/employee']);  
        }
    )
  }
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/employee']);  
  }
  ngOnInit() {
  }

}
