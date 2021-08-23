import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createNewExpenseAction } from '../../store/actions/expenses.actions';
import { ExpenseInterface } from '../../_models/expense.interface';
@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css'],
})
export class CreateExpenseComponent implements OnInit {
  public newExpenseForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store, private location: Location) {
    this.newExpenseForm = this.fb.group({
      description: ['', [Validators.required]],
      amount: [null, [Validators.required, Validators.min(0)]],
      currency: ['UAH', [Validators.required]],
      type: ['card', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  get description() {
    return this.newExpenseForm.get('description');
  }
  get amount() {
    return this.newExpenseForm.get('amount');
  }

  saveExpense(event: Event): void {
    event.preventDefault();
    const { description, amount, currency, type } = this.newExpenseForm.value;
    const expense: ExpenseInterface = {
      description,
      amount,
      currency,
      type,
    };
    this.store.dispatch(createNewExpenseAction({ expense }));
    this.location.back();
  }
}
