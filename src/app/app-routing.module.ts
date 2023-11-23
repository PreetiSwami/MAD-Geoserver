import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CropStatisticsComponent } from './crop-statistics/crop-statistics.component';
import { CropAnalyticsComponent } from './crop-analytics/crop-analytics.component';
import { TradeSuppliersComponent } from './trade-suppliers/trade-suppliers.component';

const routes: Routes = [
  {path:'location',component:LocationComponent},
  {path:'cropStatistics',component:CropStatisticsComponent},
  {path:'cropAnalytics',component:CropAnalyticsComponent},
  {path:'traders',component:TradeSuppliersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
