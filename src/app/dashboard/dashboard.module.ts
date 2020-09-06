import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewsBoxComponent } from './components/news-box/news-box.component';
import { StatsComponent } from './components/stats/stats.component';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { GraphComponent } from './components/graph/graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    NewsBoxComponent,
    StatsComponent,
    DashboardContainerComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    // MatTabsModule
  ]
})
export class DashboardModule { }
