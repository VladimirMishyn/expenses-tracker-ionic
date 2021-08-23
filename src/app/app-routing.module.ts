import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/expenses',
    pathMatch: 'full',
  },
  {
    path: 'authorize',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: { authRequired: false },
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then((m) => m.ExpensesModule),
    data: { authRequired: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
