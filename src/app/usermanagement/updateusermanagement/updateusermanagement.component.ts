import { Component, OnInit } from '@angular/core';
import { user } from '../../classes/user_tbl';
import { UsermanagementService } from '../../services/usermanagement.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateusermanagement',
  templateUrl: './updateusermanagement.component.html',
  styleUrls: ['./updateusermanagement.component.css']
})
export class UpdateusermanagementComponent implements OnInit {

  user_email:string;
  user_password:string;
  user_name:string;
  user_mobileno:number;
  user_city:string;
  user_gender:string="male";
  gender_arr:string[]=["male","female"];
  user_address:string;
  user_type:number;
  updateUserArray:user[]=[];
  
  constructor(private _userservice:UsermanagementService,private _router:Router,private _activatedroutes:ActivatedRoute) { }

  UpdateUser()
  {
     this._userservice.updateUser(new user(this.user_email,this.user_password,this.user_name,this.user_mobileno,this.user_city,this.user_gender,this.user_address,this.user_type,)).subscribe(
       (data:any)=>{
         console.log(data);
        this._router.navigate(['menunav/:user_email/usermanagement']);      
       }
    )  
    
  }
  BackButton(){
    this._router.navigate(['menunav/:user_email/usermanagement']);  
  }
  CancelUser()
  { 
    this._router.navigate(['menunav/:user_email/usermanagement']);  
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
