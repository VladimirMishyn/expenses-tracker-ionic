import { createAction, props } from '@ngrx/store';
import { ExpenseInterface } from '../../_models/expense.interface';
import { ExpenseActionTypes } from './expense.ation-types';

export const getInitialExpensesAction = createAction(ExpenseActionTypes.loadExpensesInitial, props<{ query: any }>());
export const getInitialExpensesSuccessAction = createAction(
  ExpenseActionTypes.loadExpensesInitialSuccess,
  props<{ expenses: Array<ExpenseInterface> }>()
);
export const getInitialExpensesFailureAction = createAction(ExpenseActionTypes.loadExpensesInitialFailure);

export const createNewExpenseAction = createAction(
  ExpenseActionTypes.addExpense,
  props<{ expense: ExpenseInterface }>()
);

export const createNewExpenseSuccessAction = createAction(
  ExpenseActionTypes.addExpenseSuccess,
  props<{ expense: ExpenseInterface }>()
);

export const createNewExpenseFailureAction = createAction(ExpenseActionTypes.addExpenseFailure);
