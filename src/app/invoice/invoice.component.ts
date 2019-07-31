import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { customerInvoice } from '../classes/cutomer_invoice';
import { category } from '../classes/category';
import { product } from '../classes/product';
import { InvoiceService } from '../services/invoice.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  category_id:number;
  product_id:string;
  product_price:number;
  customer_email:string;
  customer_name:string;
  customer_mobileno:number;
  customer_billing_address:string;
  customer_shipping_address:string;
  customer_product_qty:number;
  i:number;
  
  subtotal:number=0;
  itemtotal:number;
  gst:number=0;
  grandtotal:number;
  addCustomerInvoiceArray:customerInvoice[]=[];
  categoryArray: category[] = [];
  qty:number[]=[];
  price:number[]=[];
  productArray: product[] = [];
  //validation
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  mobilenoFormControl = new FormControl('', [
    Validators.required,
  ]);
  billingaddressFormControl = new FormControl('', [
    Validators.required,
  ]);
  shippingaddressFormControl = new FormControl('', [
    Validators.required,
  ]);
  categoryidFormControl = new FormControl('', [
    Validators.required,
  ]);
  productidFormControl = new FormControl('', [
    Validators.required,
  ]);
  customerproductqtyFormControl = new FormControl('',[
    Validators.required,
  ]);
  productpriceFormControl= new FormControl('',[
    Validators.required,
  ]);
  constructor(private _customerinvoice:InvoiceService,private _categoryservice:CategoryService,private _productservice:ProductService) { }
  onCreateMemo(){
    this._customerinvoice.addCustomerInvoice(new customerInvoice(this.customer_email,this.customer_name,this.customer_mobileno,this.customer_billing_address,this.customer_shipping_address,this.category_id,this.product_id,this.customer_product_qty)).subscribe(
      (data:any)=>{
          console.log(data);
          this.addCustomerInvoiceArray.push(new customerInvoice(this.customer_email,this.customer_name,this.customer_mobileno,this.customer_billing_address,this.customer_shipping_address,this.category_id,this.product_id,this.customer_product_qty));
          alert("successfully added");
          
      }
    )
  }
  productThroughCategory(category_id:number){
    this._customerinvoice.getProductByCategoryId(category_id).subscribe(
      (data:any[])=>{
        this.productArray=data;
        console.log(this.productArray);
        //console.log(category_id);
        console.log(this.productArray[0].product_price);
      }
    )
  }
  Productprice(item)
  {
    this._productservice.getProductById(item.product_id).subscribe(
      (data:any)=>{
        this.price=data;
        //console.log(item.product_id);
        //console.log(this.price);
      console.log(item.product_price);
      }
    );
  }
   
  ngOnInit() {
    this._categoryservice.getAllCategory().subscribe(
      (data:any)=>{
        this.categoryArray=data;
      console.log(this.categoryArray);
      
      }
    );
    for(this.i=1;this.i<21;this.i++)
    {
      this.qty.push(this.i);
    }
    
    
  }
  
  value(item){
    this.customer_product_qty=item;
    //console.log(item);
    this.itemtotal+=this.productArray[0].product_price*item;
    console.log(this.itemtotal);
    this.subtotal=this.subtotal+this.itemtotal;
    console.log(this.subtotal);
    this.gst=this.subtotal*0.18;
    console.log(this.gst);
    this.grandtotal=this.subtotal+this.gst;
    console.log(this.grandtotal)
  }

}
