import { EntityState } from '@ngrx/entity';
import { ExpenseInterface } from '../../_models/expense.interface';

export interface ExpenseStateInterface extends EntityState<ExpenseInterface> {
  query: { [key: string]: string };
  firstPortionLoaded: boolean;
  loadingInProgress: boolean;
  positionInList: number;
}
