import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../_models/app-state.interface';
import { UserStateInterface } from '../_models/user-state.interface';

export const userStateSelector = (state: AppStateInterface) => state.user;

export const selectUserisLoaded = createSelector(
  userStateSelector,
  (userState: UserStateInterface) => userState.isLoaded && !!userState.user
);

export const selectUser = createSelector(userStateSelector, (userState: UserStateInterface) => userState.user);
