import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/enitity/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[]=[]
  constructor(
    private customerService:CustomerService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.customers=this.customerService.getAllCustomers();
  }

  onDelete(id:number){
    this.customerService.deleteCustomer(id);
  }
  onAdd(){
    this.router.navigate(['add']);
  }
  onUpdate(id:number){
    this.router.navigate(['update',id]);
  }
}
