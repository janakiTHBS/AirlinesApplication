import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckinComponent } from './staff/checkin/checkin.component';
import { FlightComponent } from './staff/checkin/flight/flight.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './app.reducer';
import { FlightModule } from './staff/checkin/flight/flight.module';
@NgModule({
  declarations: [
    AppComponent,
    CheckinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlightModule,
    StoreModule.forRoot(fromApp.appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
