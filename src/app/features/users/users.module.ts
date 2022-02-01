import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserlistComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
