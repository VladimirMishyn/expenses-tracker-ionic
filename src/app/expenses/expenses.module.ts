import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ExpensesComponent],
  imports: [CommonModule, IonicModule, ExpensesRoutingModule],
})
export class ExpensesModule {}
