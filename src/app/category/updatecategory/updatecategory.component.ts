import { Component, OnInit } from '@angular/core';
import { category } from '../../classes/category';
import { CategoryService } from '../../services/category.service';
import { Router,ActivatedRoute } from '@angular/router';
import { categoryname } from '../../classes/categoryname';
@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  category_id:number;
  category_name:string;

  updateCategoryArray:category[]=[];
  constructor(private _categoryservice:CategoryService,private _router:Router,private _activatedroutes:ActivatedRoute) { }

  BackButton()
  {
    this._router.navigate(['menunav/:user_email/category']);      
  }
  UpdateCategory()
  {
     this._categoryservice.updateCategory(new category(this.category_id,this.category_name)).subscribe(
       (data:any)=>{
         console.log(data);
         alert("Updated Successfully");
        this._router.navigate(['menunav/:user_email/category']);      
       }
    )  
    
  }
  CancelCategory()
  { 
    this._router.navigate(['menunav/:user_email/category']);  
  }
  ngOnInit() {
    this.category_name=this._activatedroutes.snapshot.params['category_name'];

    this._categoryservice.getCategoryByName(this.category_name).subscribe(
      (data:category[])=>{
        console.log(data);
        this.category_id=data[0].category_id;
        this.category_name=data[0].category_name;
      }
    );
  }

  

}
