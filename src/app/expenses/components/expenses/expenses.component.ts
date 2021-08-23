import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from '../../../store/actions/user.actions';
import { selectUser } from '../../../store/selectors/user.selectos';
import { UserInterface } from '../../../_models/user.interface';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  currentUser$: Observable<UserInterface> = this.store.select(selectUser);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
