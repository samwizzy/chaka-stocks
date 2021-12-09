import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  open: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openMenu = () => {
    this.open = !this.open;
  };
}
