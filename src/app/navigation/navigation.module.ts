import { NgModule } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SidenavModule } from './sidenav/sidenav.module';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.4, threshold: 20 }
  };
}

@NgModule({
  imports: [
    CommonModule,
    SidenavModule
  ],
  exports: [SidenavModule],
  declarations: [],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }]
})

export class NavigationModule { }
