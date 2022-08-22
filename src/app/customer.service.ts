import { Injectable } from '@angular/core';
import { Customer } from './enitity/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 0,
      name: 'Sush',
      age: 20,
      gender:'female',
      address:'Dhone',
    },
    {
      id: 1,
      name: 'rasi',
      address: 'Peddapuram',
      age: 21,
      gender:'female'
      
    },
    {
      id: 2,
      name: 'snehs',
      address: 'pandi',
      age: 30,
      gender:'female'
    },
  ]
  constructor() { }

  getAllCustomers() {
    return this.customers;
  }

  //return the index of the last item. The returned value can be set as the id for a new Customer.
  //Thus, user need not worry about managing the IDs.
  getLastIndex() {
    return this.customers.length;
  }

  //saves a Customer to the array using push() method.
  saveCustomer(customer: Customer) {

    //the parameter is an instance of Customer. We need to save an instance of JSON Object to the array.
    //So, we will be converting the Customer instance to a JSON object.
    let customerToPush = {
      id: this.getLastIndex(),
      name: customer.name,
      address: customer.address,
      age: customer.age,
      gender: customer.gender
    };
    this.customers.push(customerToPush);
  }

  //retrieves a single Customer from the array using an ID.
  getCustomer(id: number): Customer {
    let customer: Customer = new Customer();

    //checks the array index for object with the ID. Array Index and ID are same for an object.
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == id) {
        customer.id = this.customers[i].id;
        customer.name = this.customers[i].name;
        customer.address = this.customers[i].address;
        customer.age = this.customers[i].age;
        customer.gender = this.customers[i].gender;
        break;
      }
    }
    return customer;
  }

  // updates a Customer based on ID.
  updateCustomer(id: number,cutomer:Customer) {
    for (let i: number = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == id) {
        this.customers[i]=cutomer;
        break;
      }
    }
  }

  //deletes a Customer based on ID.
  deleteCustomer(id: number) {
    //the only logical way to delete a Customer without leaving holes in the array is splice.
    //syntax : splice(<index_to_start_deleting>, <No._of_items_to_delete>)
    this.customers.splice(id, 1);
  }

  getCustomersByName(): Customer[] {
    let customers: Customer[] = this.customers.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });

    return customers;
  }
}
