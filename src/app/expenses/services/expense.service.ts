import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseInterface } from '../_models/expense.interface';

@Injectable()
export class ExpenseService {
  private static expensesApi = '/api/expenses';
  constructor(private http: HttpClient) {}

  createExpense(expense: ExpenseInterface): Observable<ExpenseInterface> {
    return this.http.post<ExpenseInterface>(`${ExpenseService.expensesApi}`, expense);
  }

  queryExpenses(query: any): Observable<Array<ExpenseInterface>> {
    return this.http.get<Array<ExpenseInterface>>(`${ExpenseService.expensesApi}`, { params: query });
  }
}
