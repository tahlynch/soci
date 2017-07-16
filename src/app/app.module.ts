import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './../environments/firebase.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@angular/material';
import { NavigationModule } from './navigation/navigation.module';
import { StoriesModule } from './stories/stories.module';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { TransformDirective } from './transform.directive';
import { HeaderscrolledDirective } from './header/header-scrolled.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import * as firebase from 'firebase';
import { EventsModule } from './events/events.module';

const declarations = [
  AppComponent,
  PageNotFoundComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  WhatWeDoComponent,
  TransformDirective,
  HeaderscrolledDirective,
  SidenavContentComponent
];
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    NavigationModule,
    StoriesModule,
    EventsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
