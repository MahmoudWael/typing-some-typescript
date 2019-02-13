export { }
//for previous line explanation read this https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

let name: string = "Mahmoud";
let age: number = 26;
let active: boolean = true;

let init: (name: string, age: number, active: boolean) => void
    = function (name, age, active) {
        console.log('username is: ' + name);
        console.log('age is: ' + age);
        console.log('active is: ' + active);
    }

init(name, age, active);