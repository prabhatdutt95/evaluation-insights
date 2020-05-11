import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabViewComponent } from './tab-view/tab-view.component';

@NgModule({
  declarations: [DashboardComponent, TabViewComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
