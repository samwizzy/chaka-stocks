import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { ButtonComponent } from './components/button/button.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { LinkifyPipe } from './pipes/linkify.pipe';
import { StripHtmlPipe } from './pipes/strip-html.pipe';

const routes: Routes = [];

const sharedModules = [
  ButtonComponent,
  DialogComponent,
  HighlightDirective,
  RepeatDirective,
  LinkifyPipe,
  StripHtmlPipe,
];

@NgModule({
  declarations: [...sharedModules],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [...sharedModules],
})
export class SharedModule {}
