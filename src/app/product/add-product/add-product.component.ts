import { Component, OnInit } from '@angular/core';
import { product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  
  product_id:string;
  product_name:string;
  category_id:number;
  product_price:number;
  product_colour:string;
  product_image:string;
  product_weight:number;
  product_warranty:number;
  product_material:string;
  product_Roomtype:string;
  product_height:number;
  product_width:number;
  product_depth:number;
  product_qty:number;
  product_offer:string;

  categoryarr:category[]=[];
  dataSource=new MatTableDataSource;
  addProductArray:product[]=[];
  selectedfile:File=null;
  selectedfile2:File=null;
  selectedfile3:File=null;
  constructor(private _productservice:ProductService,private _router:Router,private _catser:CategoryService) { }
  onAddProductButton()
  {
    // this.product_image=this.selectedfile.name;
    // this._productservice.addproduct(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh)).subscribe(
    //     (data:any)=>{

    //         this.addProductArray.push(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh));
    //         alert("successfully added");
    //         this._router.navigate(['ManagerHomepage/viewproduct']);
    //     }
    // )


    var fd = new FormData();
      fd.append('product_name', this.product_name);
      fd.append('fk_category_id', this.category_id.toString());
      fd.append('product_price', this.product_price.toString());
      fd.append('product_colour', this.product_colour);
      fd.append('product_image', this.selectedfile, this.selectedfile.name);
      fd.append('product_weight', this.product_weight.toString());
      fd.append('product_warranty', this.product_warranty.toString());
      fd.append('product_material', this.product_material);
      fd.append('product_Roomtype', this.product_Roomtype);
      fd.append('product_height', this.product_height.toString());
      fd.append('product_width', this.product_width.toString());
      fd.append('product_depth', this.product_depth.toString());
      fd.append('product_qty', this.product_qty.toString());
      fd.append('product_offer', this.product_qty.toString());


      this._productservice.addproduct(fd).subscribe(
        (data: any) => {
          console.log(data);
          var fd1 = new FormData();
          console.log(data.insertId);
          fd1.append('fk_product_id',data.insertId);
          fd1.append('product_image',this.selectedfile, this.selectedfile.name);
            this._productservice.addimage(fd1).subscribe(
              (data:any)=>{
                alert("Product Added Successfully");
                this._router.navigate(['menunav/:user_email/product']);
              }
            );


        }
      )

  }
  onselect(value)
{
  this.selectedfile=<File>value.target.files[0];

}
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/product']);
  }
  CancelButton()
  {
    this._router.navigate(['menunav/:user_email/product']);
  }
  ngOnInit() {
    this._catser.getAllCategory().subscribe(
      (data:any)=>{

        this.categoryarr=data;

      }
    );
  }

}
