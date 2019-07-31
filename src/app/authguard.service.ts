import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private _route:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
    if(localStorage.getItem('email')=="")
    {
      // alert('Page Not Found');
      this._route.navigate(['/not-found']);
    }
    else
    {
      return true;
    }
  }
}
