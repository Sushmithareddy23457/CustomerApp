import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path:'add',
    component:AddCustomerComponent
  },
  
  {
    path:'update/:id',
    component:UpdateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
