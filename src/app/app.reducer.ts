import * as FlightReducer from './staff/checkin/flight/store/flight.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    flights:FlightReducer.State,
}


export const appReducer:ActionReducerMap<AppState>={
    flights:FlightReducer.FlightState,
}