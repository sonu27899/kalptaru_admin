import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import {SalarymanagementComponent } from './salarymanagement/salarymanagement.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import {MenunavComponent } from './menunav/menunav.component';

import {OrderComponent} from './order/order.component';
import {UsermanagementComponent} from './usermanagement/usermanagement.component';
import {UpdateusermanagementComponent} from './usermanagement/updateusermanagement/updateusermanagement.component';


import { MyprofileComponent } from './myprofile/myprofile.component';
import { LoadingComponent } from './loading/loading.component';
import { RemoveEmployeeComponent } from './remove-employee/remove-employee.component';
import { WithdrawloanreqComponent } from './withdrawloanreq/withdrawloanreq.component';
import { AcceptLoanComponent } from './accept-loan/accept-loan.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { QrcodeappComponent } from './qrcodeapp/qrcodeapp.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { AddLeaveTypeComponent } from './add-leave-type/add-leave-type.component';
import { AcceptLeaveComponent } from './accept-leave/accept-leave.component';
import { ChartsComponent } from './charts/charts.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthguardService } from './authguard.service';



const arr:Routes=[
    {path:'not-found',component:NotfoundComponent},    
    {path:'invoice',component:InvoiceComponent,canActivate:[AuthguardService]},    
    {path:'qrcode',component:QrcodeappComponent,canActivate:[AuthguardService]},    
    {path:'chatbot',component:ChatbotComponent,canActivate:[AuthguardService]},    
    {path:'bar-chart',component:BarChartComponent,canActivate:[AuthguardService]},    
    {path:'doughnut-chart',component:DoughnutChartComponent,canActivate:[AuthguardService]},    
    {path:'pie-chart',component:PieChartComponent,canActivate:[AuthguardService]},    
    {path:'chart',component:ChartsComponent,canActivate:[AuthguardService]},    
    {path:'',component:LoginComponent},
    
    {path:'menunav/:user_email',component:MenunavComponent,canActivate:[AuthguardService],children:[
        {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardService]},    
        {path:'leavemanagement',component:LeaveManagementComponent,canActivate:[AuthguardService]},    
        {path:'acceptLeave',component:AcceptLeaveComponent,canActivate:[AuthguardService]},    
        {path:'addleaveType',component:AddLeaveTypeComponent,canActivate:[AuthguardService]},    
        {path:'product',component:ProductComponent,canActivate:[AuthguardService]},
        {path:'addproduct',component:AddProductComponent,canActivate:[AuthguardService]},
        {path:'updateproduct/:product_id',component:UpdateProductComponent,canActivate:[AuthguardService]},
        {path:'category',component:CategoryComponent,canActivate:[AuthguardService]},
        {path:'addcategory',component:AddcategoryComponent,canActivate:[AuthguardService]},
        {path:'updatecategory/:category_name',component:UpdatecategoryComponent,canActivate:[AuthguardService]},
        {path:'employee',component:EmployeeComponent,canActivate:[AuthguardService]},
        {path:'addemployee',component:AddEmployeeComponent,canActivate:[AuthguardService]},
        {path:'updateemployee/:employee_email',component:UpdateEmployeeComponent,canActivate:[AuthguardService]},
        {path:'salarymanagement',component:SalarymanagementComponent,canActivate:[AuthguardService]},
        {path:'order',component:OrderComponent,canActivate:[AuthguardService]},
        {path:'usermanagement',component:UsermanagementComponent,canActivate:[AuthguardService]},
        {path:'updateuser/:user_email',component:UpdateusermanagementComponent,canActivate:[AuthguardService]},
        {path:'withdrawloanreq',component:WithdrawloanreqComponent,canActivate:[AuthguardService]},
        {path:'dialogbox/:loan_id',component:DialogboxComponent,canActivate:[AuthguardService]},
        {path:'AcceptLoan',component:AcceptLoanComponent,canActivate:[AuthguardService]},    
        {path:'moreimage/:product_id',component:UploadImageComponent,canActivate:[AuthguardService]},    
        {path:'orderdetails/:order_id',component:OrderdetailsComponent,canActivate:[AuthguardService]},    
    ]},
    
    {path:'removeemployee/:employee_email',component:RemoveEmployeeComponent,canActivate:[AuthguardService]},
    {path:'myprofile/:user_email',component:MyprofileComponent,canActivate:[AuthguardService]},
    {path:'loading',component:LoadingComponent,canActivate:[AuthguardService]},
    

    {path:'**',redirectTo:'/not-found',pathMatch:'full'}    
];

export const routing=RouterModule.forRoot(arr);
