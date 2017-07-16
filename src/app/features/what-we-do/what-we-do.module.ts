import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatWeDoRoutingModule } from './what-we-do-routing.module';
import { WhatWeDoComponent } from './what-we-do.component';

@NgModule({
  imports: [
    CommonModule,
    WhatWeDoRoutingModule
  ],
  declarations: [WhatWeDoComponent]
})
export class WhatWeDoModule { }
