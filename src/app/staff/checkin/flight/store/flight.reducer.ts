import { Flight } from '../flight.model';
import * as FlightActions  from './flight.actions';
export interface State {
    flights:Flight[]
}

const initialState:State= {
    flights:[
        new Flight('1','AirIndia','Bangalore','Hyd',new Date(),new Date()),
        new Flight('2','AirAP','Bangalore','Hyd',new Date(),new Date()),
        new Flight('3','AirKarnataka','Bangalore','Hyd',new Date(),new Date()),
        new Flight('4','AirChennai','Bangalore','Hyd',new Date(),new Date())
    ]

}
export function FlightState (state=initialState,action:FlightActions.FlightActions){

    switch(action.type){
        case FlightActions.FETCH_FLIGHTS:
            return {
                ...state,
                flights:[...action.payload]
            };
        default :
        return state;  
    }
}