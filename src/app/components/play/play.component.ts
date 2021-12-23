import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

let users = [
  { id: 1, name: 'Samuel', email: 'samwize.inc@gmail.com' },
  { id: 2, name: 'David', email: 'david.inc@gmail.com' },
  { id: 3, name: 'Michael', email: 'michael.inc@gmail.com' },
  { id: 4, name: 'Joel', email: 'joel.inc@gmail.com' },
  { id: 5, name: 'Femi', email: 'femi.inc@gmail.com' },
];

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  users: any = users;
  lastname: string = '';
  link: string = 'https://google.com';
  anchor: string = 'This is my link <a href="https://google.com">google</a>';
  form: any = {
    email: '',
    surname: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onModelChange() {
    console.log(this.form.surname, 'surname');
  }

  onChange(value: any) {
    console.log(value);
  }

  btnClick() {
    console.log('I was clicked');
  }

  onChangeLastname(ev: any) {
    console.log(ev.target.value);
  }

  submit(form: NgForm) {
    console.log(form.value);
  }

  handleSubmit() {
    console.log(this.form);
  }

  onSubmit(e: any) {
    e.preventDefault();
    console.log(this.lastname, 'lastname');
  }

  identify(index: number, item: any) {
    return item.name;
  }

  refresh(): void {
    this.users.push({ id: 6, name: 'Tolani', email: 'tolani@gmail.com' });
  }
}
