import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page.component';
import { PageNotFoundComponent } from './not-found.component';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialComponent } from './material/material.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

const appRoutes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'first-page',
    component: FirstPageComponent,
    data: { firstPageTitle: 'Route Title First Page' }
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'material', component: MaterialComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    HomePageComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [Title, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
