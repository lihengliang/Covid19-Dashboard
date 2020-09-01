import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsBoxComponent } from './components/news-box/news-box.component';
import { StatsComponent } from './components/stats/stats.component';



@NgModule({
  declarations: [NewsBoxComponent, StatsComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
