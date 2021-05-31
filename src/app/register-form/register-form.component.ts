import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      address: this.formBuilder.group({
        street: '',
        addressLine2: '',
        city: '',
        region: '',
        postal: '',
        country: '',
      }),
      phone: this.formBuilder.group({
        start: '',
        center: '',
        end: '',
      }),
      email: '',
      arrivalDate: this.formBuilder.group({
        mm: '',
        dd: '',
        yyyy: '',
      }),
      departureDate: this.formBuilder.group({
        mm: '',
        dd: '',
        yyyy: '',
      }),
    });
  }
}
