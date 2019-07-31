import { Component, OnInit } from '@angular/core';
import { employee } from '../../classes/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee_email:string;
  
  employee_name:string;
  employee_joining_date:Date;
  employee_salary:number;
  employee_designation:string;
  employee_mobileno:number;
  employee_city:string;
  employee_gender:string;
  gender_arr:string[]=["male","female"];
  employee_address:string;
  employee_type:number;
  salary_status:string;
  designation:string;
  updateProductArray:employee[]=[];
  designation_arr:string[]=["Manager","Delivery_Boy","Cashier","Worker"];
  constructor(private _employeeservice:EmployeeService,private _router:Router,private _activatedroutes:ActivatedRoute) { }
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/employee']);  
  }
  UpdateEmployee()
  {
     this._employeeservice.updateEmployee(new employee(this.employee_email,this.employee_name,this.employee_joining_date,this.employee_salary,this.employee_designation,this.employee_mobileno,this.employee_city,this.employee_gender,this.employee_address,this.salary_status)).subscribe(
       (data:any)=>{
         console.log(data);
         alert("Updated Successfully");
        this._router.navigate(['menunav/:user_email/employee']);      
       }
    )  
    
  }
  onCancel()
  {
    this._router.navigate(['menunav/:user_email/employee']);  
  }
  ngOnInit() {
    this.employee_email=this._activatedroutes.snapshot.params['employee_email'];

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

        
      }
    );
  }

}
