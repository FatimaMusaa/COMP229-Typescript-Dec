//java script variable
var person = "Fatima"; //string
var animals = []; //array
animals = person; //valid javascript; not valid Typescript
// Typescript variables
var firstName = "Jhon";
var lastName = "Tim"; // convert variable type to any type like javascript
var height = 6;
var isDone = false;
firstName = height; // invalid typescript
//Classes
var Car = /** @class */ (function () {
    //Constructor
    function Car(wheels, engine) {
        this.wheels = wheels;
        this.engine = engine;
    }
    Car.prototype.drive = function () {
        console.log('Driving....');
    };
    return Car;
}());
var myCar = new Car(4, 'v8');
myCar.drive();
