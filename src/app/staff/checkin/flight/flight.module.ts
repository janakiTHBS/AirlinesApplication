import { NgModule } from '@angular/core';
import { FlightComponent } from './flight.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlightRoutingModule } from './flight-routing.module';
import {FormsModule} from '@angular/forms';
@NgModule({
    declarations:[FlightComponent],
    imports:[CommonModule,RouterModule,FlightRoutingModule,
    FormsModule],
    exports:[FlightComponent]
})

export class FlightModule {

}