import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() Data;

  // chart options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'GDP Per Capita';
  timeline = true;
  // view: any[];
  casesData = [];
  recoveredData = [];
  deathsData = [];

  chartData = [
    {
      name: 'Cases',
      series: this.casesData
    },
    {
      name: 'Recovered',
      series: this.recoveredData
    },
    {
      name: 'Deaths',
      series: this.deathsData
    }
  ];

  colorScheme = {
    domain: ['#E44D25', '#5AA454', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
  }


  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    if (this.Data) {
      Object.entries(this.Data.cases).forEach(
        ([key, val]) => this.casesData.push({
          name: new Date(key),
          value: val
        })
      );
      Object.entries(this.Data.recovered).forEach(
        ([key, val]) => this.recoveredData.push({
          name: new Date(key),
          value: val
        })
      );
      Object.entries(this.Data.deaths).forEach(
        ([key, val]) => this.deathsData.push({
          name: new Date(key),
          value: val
        })
      );
    }
  }
}
