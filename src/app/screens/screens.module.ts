import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabViewComponent } from './tab-view/tab-view.component';

// For MDB Angular Free
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { HorizontalBarChartComponent } from './shared/horizontal-bar-chart/horizontal-bar-chart.component';
import { StackedChartComponent } from './shared/stacked-chart/stacked-chart.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component'

@NgModule({
  declarations: [DashboardComponent, TabViewComponent, LineChartComponent, BarChartComponent, HorizontalBarChartComponent, StackedChartComponent, PieChartComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    ChartsModule,
    WavesModule
  ]
})
export class ScreensModule { }
