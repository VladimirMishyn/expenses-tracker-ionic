import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../app/_models/user.interface';
import { UserActionTypes } from './user.action-types';

export const loginAction = createAction(
  UserActionTypes.loginWithCredentials,
  props<{ email: string; password: string }>()
);

export const loginSuccessAction = createAction(
  UserActionTypes.loginWithCredentialsSuccess,
  props<{ user: UserInterface; token: string }>()
);

export const loginFailureAction = createAction(UserActionTypes.loginWithCredentialsFailure, props<{ error: string }>());

export const signInAction = createAction(
  UserActionTypes.createUser,
  props<{ name: string; email: string; password: string }>()
);

export const signInSuccessAction = createAction(
  UserActionTypes.createUserSuccess,
  props<{ user: UserInterface; token: string }>()
);

export const signInFailureAction = createAction(UserActionTypes.createUserFailure, props<{ error: string }>());