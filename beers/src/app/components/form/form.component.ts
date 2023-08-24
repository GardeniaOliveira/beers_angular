import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Form } from 'src/app/Form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // @Output() onSubmit = new EventEmitter<Form>();
  messageForm!: FormGroup;
  submitted = false;

  constructor() {}

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required,  Validators.minLength(10),]),
    });
  }

  // getErrorMessageName() {
  //   if (this.name.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.name.hasError('name') ? 'Not a valid name' : '';
  // }
  // getErrorMessageEmail() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  // getErrorMessage() {
  //   if (this.message.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.message.hasError('message') ? 'Not a valid message' : '';
  // }

  get name() {
    return this.messageForm.get('name')!;
  }

  get email() {
    return this.messageForm.get('email')!;
  }

  get message() {
    return this.messageForm.get('message')!;
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    console.table(this.messageForm.value);
  }
}
