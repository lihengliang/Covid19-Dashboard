import { Component, OnInit } from '@angular/core';
import { CovidInfoService } from '../../services/covid-info.service';
import { Observable } from 'rxjs';
import { Summary, Timeline } from '../../models/covid.model';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  overallSummary$: Observable<Summary>;
  // historicalAus$: Observable<Timeline>;
  // historicalVic$: Observable<Timeline>;
  // historicalNsw$: Observable<Timeline>;
  // historicalQld$: Observable<Timeline>;
  // historicalNt$: Observable<Timeline>;
  // historicalWa$: Observable<Timeline>;
  // historicalSa$: Observable<Timeline>;
  // historicalAct$: Observable<Timeline>;
  // historicalTas$: Observable<Timeline>;

  historicalCases$: Observable<Timeline>;

  selectedState = 'all';

  constructor(
    private readonly covidInfoService: CovidInfoService
  ) { }

  ngOnInit(): void {
    this.overallSummary$ = this.covidInfoService.getSummaryAus();

    this.historicalCases$ = this.covidInfoService.getHistoricalAus();

    // this.historicalVic$ = this.covidInfoService.getHistoricalByState('victoria');

    // this.historicalNsw$ = this.covidInfoService.getHistoricalByState('new south wales');

    // this.historicalQld$ = this.covidInfoService.getHistoricalByState('queensland');

    // this.historicalNt$ = this.covidInfoService.getHistoricalByState('northern territory');

    // this.historicalWa$ = this.covidInfoService.getHistoricalByState('western australia');

    // this.historicalSa$ = this.covidInfoService.getHistoricalByState('south australia');

    // this.historicalAct$ = this.covidInfoService.getHistoricalByState('australian capital territory');

    // this.historicalTas$ = this.covidInfoService.getHistoricalByState('tasmania');
  }

  onSelectState(event: any): void {
    this.selectedState = event.target.value;
    if (this.selectedState === 'all') {
      this.historicalCases$ = this.covidInfoService.getHistoricalAus();
    } else {
      this.historicalCases$ = this.covidInfoService.getHistoricalByState(this.selectedState);
    }
  }

  // onSelectState(event: any): void {
  //   this.selectedState = event.target.value;

  //   switch (this.selectedState) {
  //     case 'victoria':
  //       if (!this.historicalVic$) {
  //         this.historicalVic$ = this.covidInfoService.getHistoricalByState('victoria');
  //       }
  //       break;
  //     case 'new south wales':
  //       if (!this.historicalNsw$) {
  //         this.historicalNsw$ = this.covidInfoService.getHistoricalByState('new south wales');
  //       }
  //       break;
  //     case 'queensland':
  //       if (!this.historicalQld$) {
  //         this.historicalQld$ = this.covidInfoService.getHistoricalByState('queensland');
  //       }
  //       break;
  //     case 'northern territory':
  //       if (!this.historicalNt$) {
  //         this.historicalNt$ = this.covidInfoService.getHistoricalByState('northern territory');
  //       }
  //       break;
  //     case 'western australia':
  //       if (!this.historicalWa$) {
  //         this.historicalWa$ = this.covidInfoService.getHistoricalByState('western australia');
  //       }
  //       break;
  //     case 'south australia':
  //       if (!this.historicalSa$) {
  //         this.historicalSa$ = this.covidInfoService.getHistoricalByState('south australia');
  //       }
  //       break;
  //     case 'australian capital territory':
  //       if (!this.historicalAct$) {
  //         this.historicalAct$ = this.covidInfoService.getHistoricalByState('australian capital territory');
  //       }
  //       break;
  //     case 'tasmania':
  //       if (!this.historicalTas$) {
  //         this.historicalTas$ = this.covidInfoService.getHistoricalByState('tasmania');
  //       }
  //       break;
  //     default:
  //       if (!this.historicalAus$) {
  //         this.historicalAus$ = this.covidInfoService.getHistoricalAus();
  //       }
  // }

  // loadState(tabIdx: number): void {
  //   let state: string;
  //   switch (tabIdx) {
  //     case 0:
  //       return;
  //     case 1:
  //       state = 'victoria';
  //       break;
  //     case 2:
  //       state = 'new south wales';
  //       break;
  //     case 3:
  //       state = 'queensland';
  //       break;
  //     case 4:
  //       state = 'northern territory';
  //       break;
  //     case 5:
  //       state = 'western australia';
  //       break;
  //     case 6:
  //       state = 'south australia';
  //       break;
  //     case 7:
  //       state = 'australian capital territory';
  //       break;
  //     case 8:
  //       state = 'tasmania';
  //   }

  //   this.historicalState$ = this.covidInfoService.getHistoricalByState(state);
  // }

}
