import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'src/app/Form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Form>();

  //declare the form with date from html
  messageForm!: FormGroup;
  submitted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
    });
  }

  get name() {
    return this.messageForm.get('name')!;
  }

  get email() {
    return this.messageForm.get('email')!;
  }

  get message() {
    return this.messageForm.get('message')!;
  }

  Submit() {
    if (this.messageForm.invalid) {
      return;
    } else {
      this.submitted = true;
    }
    console.table(this.messageForm.value);
  }
  closeMessage() {
    window.location.reload();
  }
}
