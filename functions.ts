module functions_demo {
    var squareIt = function (n1: number, n2: number) {
        return n1 * n2;
    }

    var squareItSimple = (n1: number, n2: number) => n1 * n2;

    var helloWorld: (name?: string) => void
        = function (name?: string) {
            console.log('Hello ' + (name || 'unknown'));
        }

    helloWorld();
    helloWorld('Mahmoud');


    var squareRect: (rect: { h: number; w?: number; }) => number;

    var rectA = { h: 5 };
    var rectB = { h: 8, w: 10 };

    squareRect = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    }

    

}
