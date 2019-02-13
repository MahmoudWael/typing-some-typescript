module dynamic_demo {
    var fruit;                        // fruit is with type any
    fruit = 'Apple';
    console.log(fruit.substring(0, 2));

    fruit = {
        name: 'Apple',
        color: 'green'
    }
    // console.log(fruit.substring(0,2)); //here is an error : 'substring' does not exist on type '{ name: string; color: string; }' 
    //becasue we expecting the person to always be a string but it was declared with type any

    //to solve this issue
    var myfruit: string;               // myfruit is with type string
    myfruit = 'banana';
    console.log(myfruit.substring(0, 2));

    var myfruit2 = {
        name: 'banana',
        color: 'yellow'
    }
    console.log(myfruit2.color.substring(0, 2));
}