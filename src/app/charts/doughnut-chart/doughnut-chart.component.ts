import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Chart } from "chart.js";
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  constructor(private _dashboardservice:DashboardService) { }
  
countemployee:number;
countproduct:number;
Doughnutchart=[this.countproduct,this.countemployee];
total:number;
perproduct:number[]=[];
peremployee:number[]=[];
// public doughnutChartLabels=['Customer','Product'];
// public doughnutChartType='doughnut';
// public doughnutChartData=[2,2];
  ngOnInit() {
    this._dashboardservice.CountEmployee().subscribe(
      (data:any[])=>{
        this.countemployee=data[0].employee;
        console.log(this.countemployee);
        this._dashboardservice.CountProduct().subscribe(
          (data:any[])=>{
            this.countproduct=data[0].Product;
            console.log(this.countproduct);
                this.total=this.countproduct + this.countemployee;
                this.peremployee[0]=(100*this.countemployee)/this.total;
                this.perproduct[0]=(100*this.countproduct)/this.total;
                console.log(this.total)
                console.log(this.perproduct);
                console.log(this.peremployee);
          }
        );
      }
    );

  
    
  this.Doughnutchart =new Chart('doughnutchart',{
    type :'doughnut',
    data :{
        labels:['product','employee'],
        datasets:[
            {
            label:'compare',
            backgroundColor:['#FFA07A','#FF7F50'],
            data:[this.perproduct,this.peremployee],
        }],
    },
    options:{
      title:{
        text:"Doughnut Chart",
        display:true
      }
    }
    
});    
  }
}
