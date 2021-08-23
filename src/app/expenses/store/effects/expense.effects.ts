/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ExpenseService } from '../../services/expense.service';
import {
  createNewExpenseAction,
  createNewExpenseFailureAction,
  createNewExpenseSuccessAction,
  getInitialExpensesAction,
  getInitialExpensesFailureAction,
  getInitialExpensesSuccessAction,
} from '../actions/expenses.actions';

@Injectable()
export class UserEffects {
  queryExpenses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getInitialExpensesAction),
      switchMap(({ dates }) =>
        this.expenseService.queryExpenses(dates).pipe(
          map((expenses) => getInitialExpensesSuccessAction({ expenses })),
          catchError((error: string) => of(getInitialExpensesFailureAction()))
        )
      )
    );
  });

  createExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createNewExpenseAction),
      switchMap(({ expense }) =>
        this.expenseService.createExpense(expense).pipe(
          map((response) => createNewExpenseSuccessAction({ expense: response })),
          catchError((error: string) => of(createNewExpenseFailureAction()))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private alertController: AlertController,
    private expenseService: ExpenseService
  ) {}
}
