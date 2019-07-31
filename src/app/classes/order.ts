export class orderstatus
{
  constructor(public order_id:number,
              public order_date:Date,
              public order_amount:number,
              public fk_product_id:number,
              public fk_category_id:number,
              public fk_user_email:String,
              public delievery_assign:String,
              public order_status:number
              ){}
}