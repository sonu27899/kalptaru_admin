import { Component, OnInit,ViewChild } from '@angular/core';
import { product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:product[]=[];
  addProductArray:product[]=[];
   deleteProductArray:product[]=[];
   f:number=0;
  displayedColumns: string[] = [ 'Product_Name','Category_Name','Qty','product_price','Action'];
  dataSource=new MatTableDataSource(this.product);
  constructor(private _productservice:ProductService,private _router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ProductPage()
  {
    this._router.navigate(['menunav/:user_email/addproduct']);
  }
  UpdateProduct(item:product)
  {

    this._router.navigate(['menunav/:user_email/updateproduct',item.product_id]);
  }
  DeleteProduct(item)
  {
    this._productservice.deleteproduct(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.deleteProductArray.splice(this.deleteProductArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        this.dataSource.data=this.product;
        alert('Deleted Successfully');
      }
    )
  }

  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._productservice.getAllProduct().subscribe(
      (data:any)=>{
        this.product=data;
        this.dataSource.data=this.product;
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
