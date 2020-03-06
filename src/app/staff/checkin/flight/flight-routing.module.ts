import { Routes, RouterModule } from "@angular/router";
import { FlightComponent } from './flight.component';
import { NgModule } from '@angular/core';

const routes:Routes=[
    {path:'flights',component:FlightComponent},
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FlightRoutingModule {}