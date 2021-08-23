import { createReducer, on } from '@ngrx/store';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  signInAction,
  signInFailureAction,
  signInSuccessAction,
} from '../actions/user.actions';
import { UserStateInterface } from '../_models/user-state.interface';

const initialUserState: UserStateInterface = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialUserState,
  on(loginAction, (state): UserStateInterface => ({ ...state, isLoading: true, isLoggedIn: false, error: null })),
  on(
    loginSuccessAction,
    (state, { user }): UserStateInterface => ({ ...state, isLoading: false, isLoggedIn: true, error: null, user })
  ),
  on(
    loginFailureAction,
    (state, { error }): UserStateInterface => ({ ...state, user: null, error, isLoading: false, isLoggedIn: false })
  ),
  on(signInAction, (state): UserStateInterface => ({ ...state, isLoading: true, isLoggedIn: false, error: null })),
  on(
    signInSuccessAction,
    (state, { user }): UserStateInterface => ({ ...state, isLoading: false, isLoggedIn: true, error: null, user })
  ),
  on(
    signInFailureAction,
    (state, { error }): UserStateInterface => ({ ...state, user: null, error, isLoading: false, isLoggedIn: false })
  )
);
