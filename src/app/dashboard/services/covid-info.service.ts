import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Summary } from '../models/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidInfoService {

  private readonly mathdroUrl = 'https://covid19.mathdro.id/api';
  private readonly diseaseShUrl = 'https://corona.lmao.ninja/v3/covid-19';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getSummaryAus(): Observable<any> {
    return this.httpClient.get(`${this.diseaseShUrl}/countries/Australia`).pipe(
      map((data: Summary) => ({
        ...data,
        cases: data.cases,
        recovered: data.recovered,
        deaths: data.deaths,
        todayCases: data.todayCases,
        todayDeaths: data.todayDeaths,
        todayRecovered: data.todayRecovered,
        active: data.active,
        critital: data.critital,
        tests: data.tests
      }))
    );
  }
}
