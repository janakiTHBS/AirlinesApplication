import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import { Flight } from './flight.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  constructor(private store :Store<fromApp.AppState>) { }
   flights:Flight[];
  ngOnInit(): void {
    console.log('Flight component')
    this.store.select('flights').pipe(map(FlightState=>{
      return FlightState.flights;
    })).subscribe(flights=>{
      this.flights=flights;
    });
  }

}
