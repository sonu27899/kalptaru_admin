import { Component, OnInit } from '@angular/core';
import { user } from '../classes/user_tbl';
import { UsermanagementService } from '../services/usermanagement.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user_email:string;
  user_password:string;
  user_name:string;
  user_mobileno:number;
  user_city:string;
  user_gender:string;
  user_address:string;
  user_type:number;
  
  constructor(private _userservice:UsermanagementService,private _router:Router,private _activatedroutes:ActivatedRoute) { }

  OnClickUser()
  {
    this._router.navigate(['/menunav',this.user_email]);  
  }
  CancelUser()
  { 
    this._router.navigate(['/menunav',this.user_email]);  
  }
  ngOnInit() {
    this.user_email=this._activatedroutes.snapshot.params['user_email'];
    

    this._userservice.getUserById(this.user_email).subscribe(
      (data:user[])=>{
        this.user_email=data[0].user_email;
        this.user_password=data[0].user_password;
        this.user_name=data[0].user_name;
        this.user_mobileno=data[0].user_mobileno;
        this.user_city=data[0].user_city;
        this.user_gender=data[0].user_gender;
        this.user_address=data[0].user_address;
        this.user_type=data[0].user_type;
      }
    );
  }

}
