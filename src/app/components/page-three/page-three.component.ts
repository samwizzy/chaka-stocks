import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { News } from '../../interfaces/news';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss'],
})
export class PageThreeComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.news = data;
    });
  }
}
