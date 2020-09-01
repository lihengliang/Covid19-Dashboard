import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewsBoxComponent } from './components/news-box/news-box.component';
import { StatsComponent } from './components/stats/stats.component';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';

@NgModule({
  declarations: [NewsBoxComponent, StatsComponent, DashboardContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
