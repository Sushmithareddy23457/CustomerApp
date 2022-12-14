import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/enitity/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer:Customer=new Customer();
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
   this.customerService.saveCustomer(this.customer);
this.router.navigate(['customers']);
  }

}
