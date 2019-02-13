module interfaces_demo {

    //simple interface for square function
    interface SquareFunction {
        (x: number): number;           //takes number x and returns a number
    }

    var sqauareIt: SquareFunction = (num) => num * num;

    //rectangle interface
    interface Rectangle {
        h: number;
        w?: number;
    }

    var squareRect: (rect: Rectangle) => number;

    var rectA = { h: 5 };
    var rectB = { h: 8, w: 10 };

    squareRect = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    }

    //person interface
    interface Person {
        name: string;
        age: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        name: 'Goku',
        age: 26,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        },
    }
}