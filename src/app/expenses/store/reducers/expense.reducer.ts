/* eslint-disable no-underscore-dangle */
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ExpenseInterface } from '../../_models/expense.interface';
import {
  createNewExpenseSuccessAction,
  getInitialExpensesAction,
  getInitialExpensesFailureAction,
  getInitialExpensesSuccessAction,
} from '../actions/expenses.actions';
import { ExpenseStateInterface } from '../_models/expense-state.interface';

export const expenseAdapter: EntityAdapter<ExpenseInterface> = createEntityAdapter<ExpenseInterface>({
  selectId: (entity: ExpenseInterface) => entity._id,
});

export const initialState: ExpenseStateInterface = expenseAdapter.getInitialState({
  loadingInProgress: false,
  firstPortionLoaded: false,
  positionInList: 0,
  query: {},
});

export const expenseReducer = createReducer(
  initialState,
  on(
    getInitialExpensesAction,
    (state, { query }): ExpenseStateInterface => expenseAdapter.setAll([], { ...state, loadingInProgress: true, query })
  ),
  on(
    getInitialExpensesSuccessAction,
    (state, { expenses }): ExpenseStateInterface =>
      expenseAdapter.setAll(expenses, { ...state, loadingInProgress: false, firstPortionLoaded: true })
  ),
  on(
    getInitialExpensesFailureAction,
    (state): ExpenseStateInterface => expenseAdapter.setAll([], { ...state, loadingInProgress: false })
  ),
  on(
    createNewExpenseSuccessAction,
    (state, { expense }): ExpenseStateInterface => expenseAdapter.addOne(expense, state)
  )
);
