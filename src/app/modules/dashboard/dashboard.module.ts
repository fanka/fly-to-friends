import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DestinationsListComponent } from './components/destinations-list/destinations-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, DestinationsListComponent]
})
export class DashboardModule { }
