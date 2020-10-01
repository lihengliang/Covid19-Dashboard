import { Component, OnInit } from '@angular/core';
import { CovidInfoService } from '../../services/covid-info.service';
import { Observable } from 'rxjs';
import { Summary, Timeline, NewsSummary } from '../../models/covid.model';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  overallSummary$: Observable<Summary>;

  historicalCases$: Observable<Timeline>;

  newsArticlesAus$: Observable<NewsSummary>;

  newsArticlesWorld$: Observable<NewsSummary>;

  selectedState = 'all';

  constructor(
    private readonly covidInfoService: CovidInfoService
  ) { }

  ngOnInit(): void {
    this.overallSummary$ = this.covidInfoService.getSummaryAus();
    this.historicalCases$ = this.covidInfoService.getHistoricalAus();
    this.newsArticlesAus$ = this.covidInfoService.getCovidNewsAus();
    this.newsArticlesWorld$ = this.covidInfoService.getCovidNewsWorld();
  }

  onSelectState(event: any): void {
    this.selectedState = event.target.value;
    if (this.selectedState === 'all') {
      this.historicalCases$ = this.covidInfoService.getHistoricalAus();
    } else {
      this.historicalCases$ = this.covidInfoService.getHistoricalByState(this.selectedState);
    }
  }

}
