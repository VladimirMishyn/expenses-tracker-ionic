/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserInterface } from '../../_models/user.interface';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  signInAction,
  signInFailureAction,
  signInSuccessAction,
} from '../actions/user.actions';
import { AuthService } from '../../auth/services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

export interface AuthResponseInterface {
  user: UserInterface;
  token: string;
}

@Injectable()
export class UserEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((response) => loginSuccessAction(response)),
          catchError((error: string) => of(loginFailureAction({ error })))
        )
      )
    );
  });

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInAction),
      switchMap(({ name, email, password }) =>
        this.authService.signIn(name, email, password).pipe(
          map((response) => signInSuccessAction(response)),
          catchError((error: string) => of(signInFailureAction({ error })))
        )
      )
    );
  });

  successfulLoginOrSignUp$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccessAction, signInSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );

  errorLoginOrSignIn = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginFailureAction, signInFailureAction),
        tap(async (response) => {
          const alert = await this.alertController.create({
            header: 'Login/Sign in failed',
            message: response.error,
            buttons: ['OK'],
          });

          await alert.present();
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}
}
