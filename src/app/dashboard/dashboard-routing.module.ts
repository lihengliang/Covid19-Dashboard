import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';

export const routes: Routes = [
  {
    component: DashboardContainerComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
