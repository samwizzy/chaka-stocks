import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

let users = [
  { id: 1, name: 'Samuel', email: 'samwize.inc@gmail.com' },
  { id: 2, name: 'David', email: 'david.inc@gmail.com' },
  { id: 3, name: 'Michael', email: 'michael.inc@gmail.com' },
  { id: 4, name: 'Joel', email: 'joel.inc@gmail.com' },
  { id: 5, name: 'Femi', email: 'femi.inc@gmail.com' },
];

interface IUser {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit, OnChanges {
  users!: Observable<any[]>;
  num!: Observable<any>;
  indexes = of([1, 2, 3, 4, 5]);
  username: string = 'Samuel';

  constructor() {}

  ngOnInit(): void {
    this.users = of(users).pipe(
      tap((data) => console.log(data, 'hey')),
      map((data) => data)
    );
    this.num = this.indexes.pipe(map((data) => data.filter((i) => i > 2)));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.username, 'onChange');
  }

  log(value: any) {
    console.log(value.value, 'weird');
  }
}
