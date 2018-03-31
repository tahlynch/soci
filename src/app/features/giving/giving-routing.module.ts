import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GivingComponent } from './giving.component';

const routes: Routes = [{
  path: 'giving', component: GivingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GivingRoutingModule { }
