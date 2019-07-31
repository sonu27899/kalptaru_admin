export class customerInvoice{
    constructor(
      public customer_email:string,
      public customer_name:string,
      public customer_mobileno:number,
      public customer_billing_address:string,
      public customer_shipping_address:string,
      public category_id:number,
      public product_id:string,
      public customer_product_qty:number,
      ){
    }
  }
  