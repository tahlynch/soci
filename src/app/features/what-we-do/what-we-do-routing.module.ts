import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatWeDoComponent } from './what-we-do.component';

const routes: Routes = [{ path: 'whatwedo', component: WhatWeDoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatWeDoRoutingModule { }
