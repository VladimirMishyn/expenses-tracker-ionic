import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { selectAllExpenses } from '../../store/selectors/expense.selectors';
import { ExpenseInterface } from '../../_models/expense.interface';

@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.css'],
})
export class ExpensesViewComponent implements OnInit, OnDestroy {
  expensesList$: Observable<Array<ExpenseInterface>> = this.store.select(selectAllExpenses);
  constructor(private route: ActivatedRoute, private store: Store) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
