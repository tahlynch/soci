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
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@angular/material';
import { NavigationModule } from './navigation/navigation.module';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';
import { TransformDirective } from './transform.directive';
import { HeaderscrolledDirective } from './header/header-scrolled.directive';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import * as firebase from 'firebase';
import { FeaturesModule } from './features/features.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const imports = [
  BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    NavigationModule,
    FeaturesModule,
    AppRoutingModule, // this must be second to last
    PageNotFoundModule, // this must be last
];

const declarations = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  TransformDirective,
  HeaderscrolledDirective,
  SidenavContentComponent
];

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: declarations,
  imports: imports,
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
