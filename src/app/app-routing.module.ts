import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { UserResolver } from './resolvers/user.resolver';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then((m) => m.ExpensesModule),
    data: { authRequired: true },
    resolve: { user: UserResolver },
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/expenses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
