import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  countUser:number;
 
  constructor(private _dashboardservice:DashboardService) {}
  ngOnInit(){
    this._dashboardservice.CountUser().subscribe(
      (data:any)=>{
        this.countUser=data;
        console.log(this.countUser);
      }
    );
  }
}
