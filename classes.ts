module classes_demo {
    class Engine {
        constructor(public horsePower: number, public engineType: string) { }
    }

    class Car {
        private _engine: Engine;
        constructor(enigne: Engine) {
            this.engine = enigne;
        }
        get engine(): Engine {
            return this._engine
        }
        set engine(value: Engine) {
            if (value == undefined) throw 'Please provide an engine';
            this._engine = value;
        }
        start() {
            console.log('Car engine: ' + this._engine.engineType + ' started!');
        }
    }

    var engine = new Engine(300, 'v8');
    var car = new Car(engine);
    car.start();
}
