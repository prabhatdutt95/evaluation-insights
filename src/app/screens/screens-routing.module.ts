import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { AuthGuardService } from '../services/auth-guard.service';
const routes: Routes = [
  {
    path: 'dashboard',
    component: TabViewComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '**',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
