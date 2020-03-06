import {Action} from '@ngrx/store';
import { Flight } from '../flight.model';


export const FETCH_FLIGHTS='SET_FLIGHTS';

export class SetFlights implements Action {
readonly type=FETCH_FLIGHTS;
constructor(public payload :Flight[]){

}
}


export type FlightActions=SetFlights;