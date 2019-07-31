import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // a=75;
  // b=5;
  // c=90;
  // public pieChartLabels=['sales Q1','sales Q2','sales Q3'];
  // public pieChartData=[this.a,this.b,this.c];
  // public pieChartType='pie';
  countuser:number;
countproduct:number;
  Piechart=[this.countproduct,this.countuser];
  
total:number;
perproduct:number[]=[];
peruser:number[]=[];
  constructor(private _dashboardservice:DashboardService) { }
  
  ngOnInit() {
    this._dashboardservice.CountUser().subscribe(
      (data:any[])=>{
        this.countuser=data[0].User;
        console.log(this.countuser);
        this._dashboardservice.CountProduct().subscribe(
          (data:any[])=>{
            this.countproduct=data[0].Product;
            console.log(this.countproduct);
                this.total=this.countproduct + this.countuser;
                this.peruser[0]=(100*this.countuser)/this.total;
                this.perproduct[0]=(100*this.countproduct)/this.total;
                console.log(this.total)
                console.log(this.perproduct);
                console.log(this.peruser);
          }
        );
      }
    );

    
      
    
  this.Piechart =new Chart('piechart',{
        type :'pie',
        data :{
            labels:['customer','product'],
            datasets:[
                {
                label:'compare',
                backgroundColor:['#f1c40f','#e67e22'],
                data:[this.perproduct,this.peruser],
            }],
        },
        options:{
          title:{
            text:"Pie Chart",
            display:true
          }
        }
        
    });    
  }


}
