import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter.component';
import { FilterStickyDirective } from './filter-sticky.directive';
import { MatIconModule, MatCheckboxModule } from '@angular/material';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    SharedModule
  ],
  declarations: [FilterComponent, FilterStickyDirective],
  exports: [FilterComponent, FilterStickyDirective]
})
export class FilterModule { }
