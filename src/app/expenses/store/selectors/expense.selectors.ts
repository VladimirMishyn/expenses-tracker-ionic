import { createFeatureSelector, createSelector } from '@ngrx/store';
import { expenseAdapter } from '../reducers/expense.reducer';

export const selectExpensesState = createFeatureSelector('expenses');

export const { selectAll, selectIds, selectEntities } = expenseAdapter.getSelectors();

export const selectAllExpenses = createSelector(selectExpensesState, selectAll);
