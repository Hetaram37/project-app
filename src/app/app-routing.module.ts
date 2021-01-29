import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard';
import { AdminNavComponent } from './layout/admin-nav/admin-nav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '', loadChildren: () => import('./view/components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin', loadChildren: () => import('./view/components/admin/admin.module').then(m => m.AdminModule),
    component: AdminNavComponent,
    canActivate: [AuthGuard]
  }, 
  
  // {
  //   path: 'employee', loadChildren: () => import('./view/components/customer/customer.module').then(m => m.CustomerModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
