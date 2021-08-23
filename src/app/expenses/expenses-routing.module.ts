import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { ExpensesViewComponent } from './components/expenses-view/expenses-view.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ParamsGuard } from './guards/params.guard';

const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent,
    canActivate: [ParamsGuard],
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    children: [
      { path: '', component: ExpensesViewComponent },
      { path: 'new', component: CreateExpenseComponent },
      { path: 'edit/:id', component: EditExpenseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesRoutingModule {}
