import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppbarComponent } from './appbar/appbar.component';
import { NavbarDirective } from 'src/app/shared/directives/navbar.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppbarComponent, NavbarDirective, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppbarComponent, FooterComponent],
})
export class CoreModule {}
