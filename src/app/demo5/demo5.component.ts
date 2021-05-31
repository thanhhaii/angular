import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'src/models/account.model';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss'],
})
export class Demo5Component implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: '',
      password: '',
      description: '',
      status: true,
      address: this.formBuilder.group({
        street: '',
        ward: '',
        district: '',
      }),
      gender: 'm',
      role: 'r2',
    });
  }

  save = () => {
    var account: Account = this.registerForm.value;
    console.log(account.username);
    console.log(account.password);
    console.log(account.description);
    console.log(account.address.street);
    console.log(account.address.ward);
    console.log(account.address.district);
    console.log(account.status);
    console.log(account.gender);
    console.log(account.role);
  };
}
