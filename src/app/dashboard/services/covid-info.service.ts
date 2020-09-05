import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Summary, Historical, Timeline } from '../models/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidInfoService {

  private readonly mathdroUrl = 'https://covid19.mathdro.id/api';
  private readonly diseaseShUrl = 'https://corona.lmao.ninja/v3/covid-19';
  // https://disease.sh/v3/covid-19/historical/australia?lastdays=all

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getSummaryAus(): Observable<Summary> {
    return this.httpClient.get(`${this.diseaseShUrl}/countries/australia`).pipe(
      map((data: Summary) => ({
        cases: data.cases,
        deaths: data.deaths,
        recovered: data.recovered,
        todayCases: data.todayCases,
        todayDeaths: data.todayDeaths,
        todayRecovered: data.todayRecovered,
        active: data.active,
        critical: data.critical,
        tests: data.tests
      }))
    );
  }

  getHistoricalAus(): Observable<Timeline> {
    return this.httpClient.get(`${this.diseaseShUrl}/historical/australia?lastdays=all`).pipe(
      map((data: Historical) => ({
        cases: data.timeline.cases,
        deaths: data.timeline.deaths,
        recovered: data.timeline.recovered
      }))
    );
  }
}
