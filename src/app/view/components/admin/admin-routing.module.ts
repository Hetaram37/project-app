import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../service/auth.guard';
import { ListComponent } from './components/project/components/list/list.component';
import { AddComponent } from './components/project/components/add/add.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/project',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'project', loadChildren: () => import('./components/project/project.module').then(m => m.ProjectModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'employee', loadChildren: () => import('./components/employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
