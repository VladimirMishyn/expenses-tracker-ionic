export interface ExpenseInterface {
  _id?: string;
  createdAt?: string;
  description: string;
  amount: number;
  type: string;
  currency: string;
}
