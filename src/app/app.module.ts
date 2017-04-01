import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@angular/material';
import { NavigationModule } from './navigation/navigation.module';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';
import { FirstComponent } from './first/first.component';
import { TransformDirective } from './transform.directive';
import { HeaderscrolledDirective } from './header/header-scrolled.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const declarations = [
  AppComponent,
  PageNotFoundComponent,
  LandingPageComponent,
  HeaderComponent,
  FooterComponent,
  FirstComponent,
  TransformDirective,
  HeaderscrolledDirective
];

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    NavigationModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
