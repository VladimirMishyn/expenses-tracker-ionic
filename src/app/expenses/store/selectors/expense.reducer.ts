import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ExpenseInterface } from '../../_models/expense.interface';
import {
  createNewExpenseAction,
  createNewExpenseSuccessAction,
  getInitialExpensesAction,
  getInitialExpensesFailureAction,
  getInitialExpensesSuccessAction,
} from '../actions/expenses.actions';
import { ExpenseStateInterface } from '../_models/expense-state.interface';

export const expenseAdapter: EntityAdapter<ExpenseInterface> = createEntityAdapter<ExpenseInterface>({});

export const initialState: ExpenseStateInterface = expenseAdapter.getInitialState({
  loadingInProgress: false,
  positionInList: 0,
  query: '',
});

export const expenseReducer = createReducer(
  initialState,
  on(
    getInitialExpensesAction,
    (state, { dates }): ExpenseStateInterface =>
      expenseAdapter.setAll([], { ...state, loadingInProgress: true, query: { dates } })
  ),
  on(
    getInitialExpensesSuccessAction,
    (state, { expenses }): ExpenseStateInterface =>
      expenseAdapter.setAll(expenses, { ...state, loadingInProgress: false })
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
