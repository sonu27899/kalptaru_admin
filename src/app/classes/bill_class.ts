export class viewbill
{
  constructor(public bill_id:number,
              public bill_amount:number,
              public bill_date:Date,
              public user_id:String,
              public bill_status:String,
              public product_id:number
              ){}
}