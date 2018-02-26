import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter.component';
import { FilterStickyDirective } from './filter-sticky.directive';
import { MatIconModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [FilterComponent, FilterStickyDirective],
  exports: [FilterComponent, FilterStickyDirective]
})
export class FilterModule { }
