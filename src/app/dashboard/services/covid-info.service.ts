import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {
  Summary, Historical, Timeline,
  StateSummary, NewsSummary, Article
} from '../models/covid.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidInfoService {

  private readonly mathdroUrl = 'https://covid19.mathdro.id/api';
  private readonly diseaseShUrl = 'https://corona.lmao.ninja/v3/covid-19';
  private readonly newsUrl = 'https://newsapi.org/v2';
  // https://disease.sh/v3/covid-19/historical/australia?lastdays=all
  // https://covid19.mathdro.id/api/countries/australia/confirmed
  // https://opendata.ecdc.europa.eu/covid19/casedistribution/json/

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

  getHistoricalByState(region: string): Observable<Timeline> {
    return this.httpClient.get(`${this.diseaseShUrl}/historical/australia/${region}?lastdays=all`).pipe(
      map((data: Historical) => ({
        cases: data.timeline.cases,
        deaths: data.timeline.deaths,
        recovered: data.timeline.recovered
      }))
    );
  }

  getSummaryByState(): Observable<StateSummary[]> {
    return this.httpClient.get(`${this.mathdroUrl}/countries/australia/confirmed`).pipe(
      map((list: any) =>
        list.map(data =>
          ({
            cases: data.confirmed,
            deaths: data.deaths,
            recovered: data.recovered,
            active: data.active,
            state: data.provinceState
          })))
    );
  }

  getCovidNewsWeek(): Observable<NewsSummary> {
    const today = new Date();
    const getNewsFromDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7).toJSON().slice(0, 10);
    return this.httpClient.get(
      `${this.newsUrl}/everything?qInTitle=covid OR coronavirus&from=${getNewsFromDate}&language=en&sortBy=popularity&pageSize=100&apiKey=${environment.newsapi.accessToken}`).pipe(
      map((data: NewsSummary) => ({
        articles: data.articles,
        totalResults: data.totalResults
      }))
    );
  }

  getCovidNewsLatest(): Observable<NewsSummary> {
    const getNewsFromDate = new Date().toJSON().slice(0, 10);
    return this.httpClient.get(
      `${this.newsUrl}/everything?qInTitle=covid OR coronavirus&from=${getNewsFromDate}&language=en&sortBy=publishedAt&pageSize=100&apiKey=${environment.newsapi.accessToken}`).pipe(
      map((data: NewsSummary) => ({
        articles: data.articles,
        totalResults: data.totalResults
      }))
    );
  }
}
