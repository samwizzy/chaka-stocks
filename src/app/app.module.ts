import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxEchartsModule } from 'ngx-echarts';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { EchartsComponent } from './components/echarts/echarts.component';
import { PlayComponent } from './components/play/play.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { QuestionComponent } from './components/question/question.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { CountriesComponent } from './components/countries/countries.component';

import { questionsReducer } from './store/reducers/questions.reducer';
import { collectionReducer } from './store/reducers/collection.reducer';
import { authReducer } from './store/reducers/auth.reducer';

import { LinkifyPipe } from './shared/pipes/linkify.pipe';
import { StripHtmlPipe } from './shared/pipes/strip-html.pipe';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    EchartsComponent,
    PlayComponent,
    LoginComponent,
    RegisterComponent,
    QuestionComponent,
    LinkifyPipe,
    StripHtmlPipe,
    ButtonComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    StoreModule.forRoot(
      {
        auth: authReducer,
        questions: questionsReducer,
        collection: collectionReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
