class Car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine
    }
    start() {
        console.log('Engine: ' + this.engine + ' started!');
    }
    stop() {
        console.log('Engine: ' + this.engine + ' stopped!');
    }
}

let car = new Car('V8');
car.start();
car.stop();

function addThreeNumbers(num1: number, num2: number, num3: number) {
    let result = num1 + num2 + num3;
    let msg = "The result is: " + result;
    console.log(msg);
}

addThreeNumbers(5, 8, 4);
