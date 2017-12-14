import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule, MatTooltipModule, MatButtonModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as firebase from 'firebase';
import 'hammerjs';

import { firebaseConfig } from './../environments/firebase.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavigationModule } from './navigation/navigation.module';
import { FooterComponent } from './footer/footer.component';
import { TransformDirective } from './transform.directive';
import { HeaderscrolledDirective } from './header/header-scrolled.directive';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { FeaturesModule } from './features/features.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

const imports = [
  BrowserModule,
  FormsModule,
  HttpModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  AngularFireDatabaseModule,
  BrowserAnimationsModule,
  CommonModule,
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
  providers: [Title, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
