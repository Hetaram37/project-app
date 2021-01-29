import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { AuthModule } from './components/auth/auth.module';
import { AdminModule } from './components/admin/admin.module';
import { CustomerModule } from './components/customer/customer.module';

@NgModule({
  declarations: [ ViewComponent ],
  imports: [
    CommonModule,
    AuthModule,
    AdminModule,
    CustomerModule
  ]
})
export class ViewModule { }
