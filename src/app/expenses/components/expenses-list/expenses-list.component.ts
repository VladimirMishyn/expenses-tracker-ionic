import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExpenseInterface } from '../../_models/expense.interface';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesListComponent implements OnInit {
  @Input() expenses: Array<ExpenseInterface>;
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
