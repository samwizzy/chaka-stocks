import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
  TemplateRef,
  ViewContainerRef,
  Renderer2,
} from '@angular/core';
import { Observable, of } from 'rxjs';
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
export class PlayComponent implements OnInit, OnChanges, AfterViewInit {
  users!: Observable<any[]>;
  username: string = 'Samuel';
  @ViewChild('el') span!: ElementRef;
  @ViewChild('temp') temp!: TemplateRef<any>;
  @ViewChild('cont') cont!: ViewContainerRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.users = of(users).pipe(
      tap((data) => console.log(data, 'tap')),
      map((data) => data)
    );
  }

  ngAfterViewInit(): void {
    console.log(this.span, 'this.span.nativeElement');
    console.log(this.temp, 'this.temp');
    console.log(this.cont, 'this.cont');
    // this.span.nativeElement.innerHTML = 'Hello world';
    const p = this.renderer.createElement('p');
    const text = this.renderer.createText('Hello friends');
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.span.nativeElement, p);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.username, 'onChange');
  }

  log(value: any) {
    console.log(value.value, 'weird');
  }
}
