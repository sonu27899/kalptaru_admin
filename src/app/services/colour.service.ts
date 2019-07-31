import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {colour} from '../classes/colour';
import { url } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ColourService {
  private url = url.endPoint+'colour/';
  constructor(private _http:HttpClient) { }
  getAllColour(){
    return this._http.get(this.url);
  }
}
