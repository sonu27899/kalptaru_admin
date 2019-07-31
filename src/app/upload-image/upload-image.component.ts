import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  product_id: number;
  start: number;
  product_image1: string="";
  product_image2: string="";
  product_image3: string="";
  img_flag: number = 0;
  img_flag2: number = 0;
  img_flag3: number = 0;
  img_count = 0;
  selectedfile1: File = null;
  selectedfile2: File = null;
  selectedfile3: File = null;
  loc:number=0;
  
  constructor(private _productservice: ProductService,private _router: Router,private _activatedroutes: ActivatedRoute) {}
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/updateproduct',this.product_id]);
  }
  SaveProduct()
  {
    this._router.navigate(['menunav/:user_email/updateproduct',this.product_id]);
  }
  CancelProduct()
  {
    this._router.navigate(['menunav/:user_email/updateproduct',this.product_id]);
  }
  onselect1(value)
  {
    this.selectedfile1 = <File>value.target.files[0];
  }
  onselect2(value)
  {
    this.selectedfile2 = <File>value.target.files[0];
  }
  onselect3(value)
  {
    this.selectedfile3 = <File>value.target.files[0];
  }
  update1stpic()
  {
    var fd = new FormData();
    this.loc=1;
    fd.append("product_image", this.selectedfile1, this.selectedfile1.name);
    fd.append("location",this.loc.toString());
    this._productservice.uploadimage(this.product_id,fd).subscribe(
    (data: any) => {
        this.ngOnInit();
        // this._router.navigate(['menunav/:user_email/product']);
    });
  }
  update2ndpic()
  {
    var fd = new FormData();
    this.loc=2;
  
    fd.append("product_image", this.selectedfile2, this.selectedfile2.name);
    fd.append("location",this.loc.toString());
    this._productservice.uploadimage(this.product_id,fd).subscribe(
      (data: any) => {
          this.ngOnInit();
          // this._router.navigate(['menunav/:user_email/product']);
      });
  }
  update3rdpic()
  {
    var fd = new FormData();
    this.loc=3;
  
    fd.append("product_image", this.selectedfile3, this.selectedfile3.name);
    fd.append("location",this.loc.toString());
    this._productservice.uploadimage(this.product_id,fd).subscribe(
      (data: any) => {
          this.ngOnInit();
          // this._router.navigate(['menunav/:user_email/product']);
      });
  }
  ngOnInit()
  {
    this.product_id = this._activatedroutes.snapshot.params["product_id"];
  
    this._productservice.getImageById(this.product_id).subscribe(
      (data: any) => {
  
          this.product_image1 = data[0].product_image;
          this.product_image2 = data[0].product_image2;
          this.product_image3 = data[0].product_image3;
  
  
  
      });
    }

}
