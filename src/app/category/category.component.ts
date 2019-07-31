import { Component, OnInit,ViewChild } from '@angular/core';
import { category } from '../classes/category';
import { CategoryService } from '../services/category.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category_id:number;
  category_name:string;
  //array declaration
  category:category[]=[];
  addCategoryArray:category[]=[];
   deleteCategoryArray:category[]=[];
  constructor(private _categoryservice:CategoryService,private _router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'category_name','Action'];
  dataSource=new MatTableDataSource(this.category);

  CategoryPage()
  {
    this._router.navigate(['menunav/:user_email/addcategory']);  
  }

  UpdateCategory(item:category)
  {
    console.log(item.category_name)
    this._router.navigate(['menunav/:user_email /updatecategory',item.category_name]);  
  }

  DeleteCategory(item)
  {
    this._categoryservice.deleteCategory(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.deleteCategoryArray.splice(this.deleteCategoryArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        console.log(this.dataSource.data);
        this.dataSource.data=this.category; 
        alert("Deleted Successfully");
      }
    )
  }
  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._categoryservice.getAllCategory().subscribe(
      (data:any)=>{
        this.category=data;
        this.dataSource.data=this.category; 
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
