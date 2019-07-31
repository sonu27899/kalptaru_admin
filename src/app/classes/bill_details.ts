export class bill_details
{
  constructor(
      public bill_detail_id:number,
      public fk_bill_id:number,
      public fk_product_id:number,
      public bill_price:number,
      public bill_qty:number,
      public bill_remarks:String,
      ){}
}