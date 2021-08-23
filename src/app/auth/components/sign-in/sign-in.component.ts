import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signInAction } from '../../../store/actions/user.actions';
import { compareFieldsEqual } from '../../../_helpers/compare-fields-equal';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: [compareFieldsEqual(['password', 'passwordRepeat'], true)],
      }
    );
  }

  signIn(): void {
    const { name, email, password } = this.signInForm.value;
    this.store.dispatch(signInAction({ name, email, password }));
  }

  get name() {
    return this.signInForm.get('name');
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  get passwordRepeat() {
    return this.signInForm.get('passwordRepeat');
  }
}
