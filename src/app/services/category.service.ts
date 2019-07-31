import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {category} from '../classes/category';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = url.endPoint+'category/';
  private url1 = url.endPoint+'category1/'
  constructor(private _http:HttpClient) { }
  getAllCategory(){
    return this._http.get(this.url);
  }
  getCategoryById(category_id:number){
    return this._http.get(this.url+category_id);
}
getCategoryByName(category_name:string){
  return this._http.get(this.url1+category_name);
}
  addCategory(item)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }

  updateCategory(item)
  {
    console.log(item);
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url,body,{headers:head1});
  }

  deleteCategory(item){
    return this._http.delete(this.url+item.category_id);
  }
}
