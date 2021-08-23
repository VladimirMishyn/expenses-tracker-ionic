import { EntityState } from '@ngrx/entity';
import { ExpenseInterface } from '../../_models/expense.interface';

export interface ExpenseStateInterface extends EntityState<ExpenseInterface> {
  query: any;
  loadingInProgress: boolean;
  positionInList: number;
}
