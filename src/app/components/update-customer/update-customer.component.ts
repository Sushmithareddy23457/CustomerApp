import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/enitity/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  numberOfOrder!:number
  customer:Customer;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
    this.customer=new Customer();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.customerService.updateCustomer(this.id,this.customer);
    this.router.navigate(['customers']);
  }

}
