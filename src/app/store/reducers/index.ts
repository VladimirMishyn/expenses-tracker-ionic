import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user.reducer';
import { AppStateInterface } from '../_models/app-state.interface';

export const reducers: ActionReducerMap<AppStateInterface> = {
  user: userReducer,
};
