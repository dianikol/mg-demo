import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.signUpForm)
  }
}
