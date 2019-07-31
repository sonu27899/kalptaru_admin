import { QRCodeModule } from 'angular2-qrcode';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { 
         
         MatTableModule,
         MatPaginatorModule,
         MatSortModule,
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule, 
         MatRadioModule,MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule,MatSelectModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';

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
import { SalarymanagementComponent } from './salarymanagement/salarymanagement.component';
import { DashboardComponent } from './dashboard/dashboard.component';



import { LayoutModule } from '@angular/cdk/layout';


import { OrderComponent } from './order/order.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { UpdateusermanagementComponent } from './usermanagement/updateusermanagement/updateusermanagement.component';


import { MyprofileComponent } from './myprofile/myprofile.component';
import { MenunavComponent } from './menunav/menunav.component';
import { LoadingComponent } from './loading/loading.component';
import { RemoveEmployeeComponent } from './remove-employee/remove-employee.component';
import { WithdrawloanreqComponent } from './withdrawloanreq/withdrawloanreq.component';
import { AcceptLoanComponent } from './accept-loan/accept-loan.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';



import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { QrcodeappComponent } from './qrcodeapp/qrcodeapp.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { AddLeaveTypeComponent } from './add-leave-type/add-leave-type.component';
import { AcceptLeaveComponent } from './accept-leave/accept-leave.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';

// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    ProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    CategoryComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    SalarymanagementComponent,

    DashboardComponent,

    OrderComponent,
    UsermanagementComponent,
    UpdateusermanagementComponent,


    MyprofileComponent,
    MenunavComponent,
    LoadingComponent,
    RemoveEmployeeComponent,
    WithdrawloanreqComponent,
    AcceptLoanComponent,
    DialogboxComponent,

    ChartsComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    QrcodeappComponent,
    ChatbotComponent,
    InvoiceComponent,

    LeaveManagementComponent,
    AddLeaveTypeComponent,
    AcceptLeaveComponent,
    UploadImageComponent,
    OrderdetailsComponent,
    NotfoundComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    QRCodeModule,
    ChartsModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    LayoutModule,
    MatTabsModule,
    
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    
    
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
