import { Component, OnInit } from '@angular/core';
import { category } from '../../classes/category';
import { categoryname } from '../../classes/categoryname';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})

export class AddcategoryComponent implements OnInit {
   category_id:number;
   category_name:string="";

   addProductArray:categoryname[]=[];
   
  constructor(private _categoryservice:CategoryService,private _router:Router) { }
  onAddCategoryButton()
  {
    const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
    console.log(control.errors);
    
    
      this._categoryservice.addCategory(new categoryname(this.category_name)).subscribe(
        (data:any)=>{
            console.log(data);
            this.addProductArray.push(new categoryname(this.category_name));
            alert("successfully added");
            this._router.navigate(['menunav/:user_email/category']);  
        }
      )
    
    
  }
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/category']);  
  }
  OnCancel()
  {
    this._router.navigate(['menunav/:user_email/category']);  
  }
  ngOnInit() {
  }

}
