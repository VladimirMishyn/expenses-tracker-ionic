/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, distinctUntilChanged, first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
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
import { routerNavigatedAction } from '@ngrx/router-store';
import { jsonStringifyCompare } from '../../../_helpers/json-stringify-compare';

@Injectable()
export class ExpenseEffects {
  onRouteChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigatedAction),
      map((nextRoute) => nextRoute.payload.routerState.root.queryParams),
      distinctUntilChanged(jsonStringifyCompare),

      map((query) => {
        return getInitialExpensesAction({ query });
      })
    );
  });

  queryExpenses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getInitialExpensesAction),
      switchMap(({ query }) =>
        this.expenseService.queryExpenses(query).pipe(
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

  constructor(private actions$: Actions, private expenseService: ExpenseService) {}
}
