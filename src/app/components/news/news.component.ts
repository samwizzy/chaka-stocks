import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { News } from '../../interfaces/news';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news!: Observable<News[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news = this.newsService.getNews().pipe(map((data) => data));
  }
}
