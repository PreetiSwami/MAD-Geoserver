import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LocationComponent } from './location/location.component';
import { CropStatisticsComponent } from './crop-statistics/crop-statistics.component';
import { CropAnalyticsComponent } from './crop-analytics/crop-analytics.component';
import { TradeSuppliersComponent } from './trade-suppliers/trade-suppliers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LocationComponent,
    CropStatisticsComponent,
    CropAnalyticsComponent,
    TradeSuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
