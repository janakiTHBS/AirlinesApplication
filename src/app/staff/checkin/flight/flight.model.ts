
export class Flight {
    id:string;
    name:string;
    to:string;
    from:string;
    timeOfDeparture:Date;
    timeOfArrival:Date;

    constructor(id:string,name:string,to:string,from:string,
        timeOfDeparture:Date,timeOfArrival:Date){
            this.id=id;
            this.name=name;
            this.to=to;
            this.from=from;
            this.timeOfDeparture=timeOfDeparture;
            this.timeOfArrival=timeOfArrival;
        }

}