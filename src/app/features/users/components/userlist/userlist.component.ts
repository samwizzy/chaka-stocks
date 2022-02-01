import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user';
import { UsersService } from '../../services/users.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  users$!: Observable<any[]>;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUserList().pipe(map((data) => data));

    console.log(this.users$, 'users');
  }
}
