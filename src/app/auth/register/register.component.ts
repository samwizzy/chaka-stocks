import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { PasswordValidator } from 'src/app/helpers/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup = new FormGroup(
    {
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      password: new FormControl(''),
      repeatPassword: new FormControl(''),
    },
    {
      validators: PasswordValidator('password', 'repeatPassword'),
    }
  );

  form: FormGroup = this.formBuilder.group(
    {
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', Validators.required],
      repeatPassword: [''],
    },
    {
      validators: PasswordValidator('password', 'repeatPassword'),
    }
  );

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form.value);
  }
}
