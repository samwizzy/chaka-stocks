import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PlayComponent } from './components/play/play.component';
import { QuestionComponent } from './components/question/question.component';
import { CountriesComponent } from './components/countries/countries.component';

const routes: Routes = [
  { path: '', component: PageOneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: 'page-three', component: PageThreeComponent },
  { path: 'playground', component: PlayComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'countries', component: CountriesComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
