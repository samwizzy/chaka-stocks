import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppbarComponent } from './appbar/appbar.component';

@NgModule({
  declarations: [AppbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppbarComponent],
})
export class CoreModule {}
