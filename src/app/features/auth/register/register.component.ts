import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PasswordValidator } from 'src/app/helpers/password.validator';
import { isLoading } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form.value);
    this.store.dispatch(isLoading());
  }
}
