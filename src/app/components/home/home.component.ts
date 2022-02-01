import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock/stock.service';
import { Stock } from '../../interfaces/stock';
import { Earnings } from '../../interfaces/earnings';
import { Sectors } from '../../interfaces/sectors';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stocks$!: Observable<Stock[]>;
  earnings: Earnings[] = [];
  sectors: Sectors[] = [];
  highlights$!: Observable<Sectors[]>;

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
    this.stocks$ = this.stockService.getStocks().pipe(map((data) => data));

    this.stockService.getEarnings().subscribe((data) => {
      this.earnings = data;
    });

    this.stockService.getSectors().subscribe((data) => {
      this.sectors = data;
    });

    this.highlights$ = this.stockService.getSectorsHighlights().pipe(
      // filter((data) => data.rate > 0.2),
      map((data) => data)
    );
  }
}
