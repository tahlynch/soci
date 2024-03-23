import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from 'angularfire2/firestore';

import { AuthService } from './auth.service';
import { CanReadGuard } from './can-read.guard';
import { AdminGuard } from './admin.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService, AngularFirestore, CanReadGuard, AdminGuard]
})
export class CoreModule { }
