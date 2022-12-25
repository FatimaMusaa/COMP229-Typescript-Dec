//java script variable

var person = "Fatima";   //string
let animals = [];   //array

animals = person  //valid javascript; not valid Typescript

// Typescript variables

let firstName: string = "Jhon";
let lastName: any = "Tim"; // convert variable type to any type like javascript
let height:number = 6;
let isDone: boolean = false;

firstName = height; // invalid typescript

//Object Oriented Typescript features

//Interfaces
interface IVehicle{
    wheels: number;
    engine: string;
    drive();
}

//Classes
class Car implements IVehicle{
    wheels: number;
    engine: string;

    //Constructor
    constructor(wheels: number, engine: string){
        this.wheels = wheels;
        this.engine = engine;
    }


    drive(){
        console.log('Driving....');


    }
}
let myCar = new Car(4, 'v8');
myCar.drive();
