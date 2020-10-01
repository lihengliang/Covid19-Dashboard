import { Component, OnInit, Input } from '@angular/core';
import { NewsSummary } from '../../models/covid.model';

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent implements OnInit {

  @Input() Title: string;
  @Input() NewsData: NewsSummary;
  constructor() { }

  ngOnInit(): void {
  }

}
