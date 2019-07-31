import { Component, OnInit } from '@angular/core';
import { product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { category } from 'src/app/classes/category';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product_id:string;
  product_name:string;
  category_name:string;
  fk_category_id:number;
  product_price:number;
  product_colour:string;
  product_image:string;
  product_image2:string;
  product_image3:string;
  product_weight:number;
  product_warranty:number;
  product_material:string;
  product_Roomtype:string;
  product_height:number;
  categoryarr:category[]=[];
  product_width:number;
  product_depth:number;
  product_qty:number;
  product_offer:string;
  updateProductArray:product[]=[];
  employee_designation:string;
  f:number=0;
  category_id:number;
  selectedfile:File=null;
  constructor(private _productservice:ProductService,private _router:Router,private _activatedroutes:ActivatedRoute,private _catser:CategoryService) { }


  BackButton()
  {
      this._router.navigate(['menunav/:user_email/product']);

  }
  UpdateProduct()
  {

    if (this.f == 1)
    {
      var fd = new FormData();
      fd.append('product id', this.product_id);
      fd.append('product_name', this.product_name);
      fd.append('category_id', this.fk_category_id.toString());
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
      fd.append('product_offer', this.product_offer.toString());

      this._productservice.updateproductwithpic(this.product_id, fd).subscribe(
        (data: any) => {
          alert("Your Product Is Successfully Updated");
          this._router.navigate(['menunav/:user_email/product']);
        }
      )

    }
    else
    {

      this._productservice.updateproductwithoutpic(new product(this.product_id,this.product_name,this.fk_category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_offer)).subscribe(
        (data: any) => {
          alert("Your Product Is Successfully Updated");
          this._router.navigate(['menunav/:user_email/product']);
        }
      );
    }


  }
  onselect(value) {
    this.selectedfile = <File>value.target.files[0];
    this.f = 1;
  }
  CancelButton()
  {

      this._router.navigate(['menunav/:user_email/product']);

  }
  moreimage()
  {
    this._router.navigate(['menunav/:user_email/moreimage',this.product_id]);
  }
  ngOnInit() {
   this.product_id=this._activatedroutes.snapshot.params['product_id'];
    this.employee_designation=localStorage.getItem('designation');
    this._productservice.getProductById(this.product_id).subscribe(
      (data:any)=>{

        //console.log(data);
        this.product_id=data[0].product_id;
        this.product_name=data[0].product_name;
        this.fk_category_id=data[0].fk_category_id;
        this.product_price=data[0].product_price;
        this.product_colour=data[0].product_colour;
        this.product_image=data[0].product_image;
        this.product_image2=data[0].product_image2;
        this.product_image3=data[0].product_image3;
        this.product_weight=data[0].product_weight;
        this.product_warranty=data[0].product_warranty;
        this.product_material=data[0].product_material;
        this.product_Roomtype=data[0].product_Roomtype;
        this.product_height=data[0].product_height;
        this.product_width=data[0].product_width;
        this.product_depth=data[0].product_depth;
        this.product_qty=data[0].product_qty;
        this.product_offer=data[0].product_offer;

        this._catser.getAllCategory().subscribe(
          (data:any)=>{

            this.categoryarr=data;
          }
        );
        this._catser.getCategoryById(data[0].fk_category_id).subscribe(
          (data1:any)=>
          {
              this.category_name=data1[0].category_name;
              //console.log(this.category_name);
          }
        )
      }
    );
  }

}
