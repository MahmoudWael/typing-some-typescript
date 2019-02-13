module primitives_demo {

    //any
    let name: any;
    let info;
    let doNothing = function (x: any) {
        return x;
    }

    //primitives
    let age: number = 26;
    let rate = 4.8;

    let isActive = true;
    let hasData: boolean = false;
    let isAdmin = function () { return 'yes'; }
    let isAuth = !!isAdmin;

    let firstname = 'Mahmoud';
    let lastname: string = 'Raslan';

    //string array
    function getArraylength(a: string[]) {
        let length: number = a.length;
        return length;
    }

    var persons: string[] = ['Jon', 'sansa', 'arya', 'ned'];
    var firstperson: string = persons[0];

    //null 
    let cats: any = null;
    let solo: Date = null;
    
    //undefined
    var quantity: number;
    var drug = undefined;

}