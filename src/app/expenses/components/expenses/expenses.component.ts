import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutAction } from '../../../store/actions/user.actions';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
