import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as AuthActions from '../core/store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../login/login.component.scss']
})
export class SignupComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]),
      repeatPassword: this.fb.control('', [Validators.required])
    });
  }

  public onSignup(): void {
    const { email, password } = this.form.value;
    this.store.dispatch(AuthActions.signUp({email, password}));
  }
}
