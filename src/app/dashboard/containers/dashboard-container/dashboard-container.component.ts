import { Component, OnInit } from '@angular/core';
import { CovidInfoService } from '../../services/covid-info.service';
import { Observable } from 'rxjs';
import { Summary } from '../../models/covid.model';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  overallSummary$: Observable<Summary>;

  constructor(
    private readonly covidInfoService: CovidInfoService
  ) { }

  ngOnInit(): void {
    this.covidInfoService.getSummaryAus().subscribe(res => {
      this.overallSummary$ = res;
    });
  }

}
