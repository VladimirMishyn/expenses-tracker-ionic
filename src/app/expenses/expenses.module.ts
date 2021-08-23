import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { IonicModule } from '@ionic/angular';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpensesDashbordComponent } from './components/expenses-dashbord/expenses-dashbord.component';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';
import { ExpensesViewComponent } from './components/expenses-view/expenses-view.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { ExpenseService } from './services/expense.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ExpenseEffects } from './store/effects/expense.effects';
import { expenseReducer } from './store/reducers/expense.reducer';

@NgModule({
  declarations: [
    ExpensesComponent,
    ExpensesListComponent,
    ExpensesDashbordComponent,
    CreateExpenseComponent,
    ExpensesViewComponent,
    EditExpenseComponent,
  ],
  providers: [ExpenseService],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ExpensesRoutingModule,
    EffectsModule.forFeature([ExpenseEffects]),
    StoreModule.forFeature('expenses', expenseReducer),
  ],
})
export class ExpensesModule {}
