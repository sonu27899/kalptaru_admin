import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Chart } from "chart.js";
import { DashboardService } from '../../services/dashboard.service';
import { CategoryService } from '../../services/category.service';
import { category } from '../../classes/category';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
// public barChartOptions={
//   scaleShowVerticalLines:false,
//   responsive:true
// }
// public barChartLabels=['2006','2007','2008','2008','2009','2010','2011','2012'];
// public barChartType='bar';
// public barChartLegend=true;
// public barChartData=[
//   {data: [12,23,45,65,45,78,45,45],label:'Series A'},
//   {data: [12,52,41,63,45,78,96,96],label:'Series B'}
// ];
BarChart=[];
countuser:number[]=[];
countproduct:number[]=[];
category:category[]=[];
category_name:string[]=[];
product:number;
total:number;
perproduct:number;
peruser:number;
i:number;
j:number;
productCount:number[]=[];
  constructor(private _categoryservice:CategoryService,private _dashboardservice:DashboardService) { }

  ngOnInit() {
    this._categoryservice.getAllCategory().subscribe(
      (data:any)=>{
        this.category=data;
        //console.log(this.category);
        for(this.i=0;this.i<this.category.length;this.i++){
          this.category_name.push(this.category[this.i].category_name);
          this._dashboardservice.ProductByCategoryId(this.category[this.i].category_id).subscribe(
            (data1:any)=>{
              //console.log(data);
              this.product=data1.length;
              this.productCount.push(this.product);
              this.product=0;
              //console.log(this.product[this.i]);
            }
          )
        }
        
          console.log(this.productCount);
          

      }
    );

    this._dashboardservice.CountUser().subscribe(
      (data:any[])=>{
        this.countuser[0]=data[0].User;
        //console.log(this.countuser);
        this._dashboardservice.CountProduct().subscribe(
          (data:any[])=>{
            this.countproduct[0]=data[0].Product;
            
                // this.total=this.countproduct + this.countuser;
                // this.peruser=(100*this.countuser)/this.total;
                // this.perproduct=(100*this.countproduct)/this.total;
                // console.log(this.total)
                // console.log(this.perproduct);
                // console.log(this.peruser);
                this.item();
          }
        );
      }
    );
  

    
}
item()
{
  this.BarChart = new Chart('barchart', {
    type: 'bar',
    data: {
      labels: this.category_name,
      datasets: [{
         label: "Product Number",
        data:this.productCount,
        fill: true,
        // lineTension: 0.2,
        borderColor: "white",
        backgroundColor:"lightblue",
        borderWidth: 1
      },
      // {
      //    label: "Offline Users",
      //   data:this.countuser,
      //   fill: true,
      //   backgroundColor:"lightgreen",
      //   // lineTension: 0.2,
      //   borderColor: "white",
      //   borderWidth: 1
    
      // }
    ],
    },
    
    
    
    options: {
      title: {
        // text: "Bar Chart",
        display: true,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      animations:
      {
        animationScale:true
      }
    }
    });
}
}
