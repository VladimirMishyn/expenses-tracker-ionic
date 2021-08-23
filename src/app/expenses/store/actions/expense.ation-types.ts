export enum ExpenseActionTypes {
  tryReloadExpenses = '[Check new params] query state changed maybe',
  loadExpensesInitial = '[On expenses page] Fetching first portion of expensions',
  loadExpensesInitialSuccess = '[Expensions API] Fetching first portion of expensions success',
  loadExpensesInitialFailure = '[Expensions API] Fetching first portion of expensions failure',
  //TODO: Add next portion loading
  addExpense = '[User adds expense] User clicks add expense option ',
  addExpenseSuccess = '[Expensions API] Expense created ',
  addExpenseFailure = '[Expensions APIe] Expense failed ',
}
