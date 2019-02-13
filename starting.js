var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log('Engine: ' + this.engine + ' started!');
    };
    Car.prototype.stop = function () {
        console.log('Engine: ' + this.engine + ' stopped!');
    };
    return Car;
}());
var car = new Car('V8');
car.start();
car.stop();
function addThreeNumbers(num1, num2, num3) {
    var result = num1 + num2 + num3;
    var msg = "The result is: " + result;
    console.log(msg);
}
addThreeNumbers(5, 8, 4);
