import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock/stock.service';
import { Stock } from '../../interfaces/stock';
import { Earnings } from '../../interfaces/earnings';
import { Sectors } from '../../interfaces/sectors';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent implements OnInit {
  stocks: Stock[] = [];
  earnings: Earnings[] = [];
  sectors: Sectors[] = [];
  highlights: Sectors[] = [];

  displayedColumns: string[] = [
    'symbol',
    'company',
    'fiscalPeriod',
    'estimatedEps',
    'actualEps',
    'surprise',
    'epsPerYear',
    'changeFromLastYear',
  ];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((data) => {
      this.stocks = data;
    });

    this.stockService.getEarnings().subscribe((data) => {
      this.earnings = data;
    });

    this.stockService.getSectors().subscribe((data) => {
      this.sectors = data;
    });

    this.stockService.getSectorsHighlights().subscribe((data) => {
      this.highlights = data;
    });
  }
}
