import { createReducer, on } from '@ngrx/store';
import {
  getUser,
  getUserFailureAction,
  getUserSuccessAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  logoutAction,
  signInAction,
  signInFailureAction,
  signInSuccessAction,
} from '../actions/user.actions';
import { UserStateInterface } from '../_models/user-state.interface';

const initialUserState: UserStateInterface = {
  isLoading: false,
  isLoaded: false,
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialUserState,
  on(loginAction, (state): UserStateInterface => ({ ...state, isLoading: true, isLoaded: false, error: null })),
  on(
    loginSuccessAction,
    (state, { user }): UserStateInterface => ({ ...state, isLoading: false, isLoaded: true, error: null, user })
  ),
  on(
    loginFailureAction,
    (state, { error }): UserStateInterface => ({ ...state, user: null, error, isLoading: false, isLoaded: false })
  ),
  on(signInAction, (state): UserStateInterface => ({ ...state, isLoading: true, isLoaded: false, error: null })),
  on(
    signInSuccessAction,
    (state, { user }): UserStateInterface => ({ ...state, isLoading: false, isLoaded: true, error: null, user })
  ),
  on(
    signInFailureAction,
    (state, { error }): UserStateInterface => ({ ...state, user: null, error, isLoading: false, isLoaded: false })
  ),
  on(logoutAction, (state): UserStateInterface => ({ ...state, isLoading: false, isLoaded: false, user: null })),
  on(getUser, (state): UserStateInterface => ({ ...state, isLoading: true, isLoaded: false, error: null })),
  on(
    getUserSuccessAction,
    (state, { user }): UserStateInterface => ({ ...state, isLoading: false, isLoaded: true, error: null, user })
  ),
  on(
    getUserFailureAction,
    (state, { error }): UserStateInterface => ({ ...state, user: null, error, isLoading: false, isLoaded: false })
  )
);
