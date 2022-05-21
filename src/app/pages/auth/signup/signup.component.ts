import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
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
              private store: Store) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.max(20), Validators.min(4), Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]),
      repeatPassword: this.fb.control('', [Validators.required])
    }, {validators: this.checkPasswords});

    this.form.valueChanges.subscribe(() => {
      const repeatPassword = this.form.get('repeatPassword')!;
      if (this.form.hasError('repeatIsDifferent')) {
        repeatPassword.setErrors({isNotSame: true});
      } else {
        repeatPassword.setErrors(null);
      }
    });
  }

  public onSignup(): void {
    const {email, password} = this.form.value;
    this.store.dispatch(AuthActions.signUp({email, password}));
  }

  private checkPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')!.value;
    const repeatPassword = group.get('repeatPassword')!.value;
    return password === repeatPassword ? null : {repeatIsDifferent: true}
  }
}
