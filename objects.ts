module objects_demo {

    //objects
    var location1 = { lat: 20, long: 60 };
    var x = location1.lat;                   // x is a number

    var location2 = {};
    location2 = { lat: 90, long: 450 };

    var location3: Object = { lat: 22 };

    var circle = {
        x: 4,
        y: 6,
        r: 11,
        calculateArea: function () {
            return 13.4 * Math.pow(this.r, 2);
        }
    }
    console.log('Circle area: ' + circle.calculateArea());

    //functions

    var squareIt = function(x: number){
        return x * x
    } 

    var v1 = squareIt(2);
    var v2 = squareIt(13);

    var squareIt2 = function(circle: {x: number; y?: number;}){
        if(circle.y === undefined){
            return circle.x * circle.x;
        }
        return circle.x * circle.y;
    }


}
