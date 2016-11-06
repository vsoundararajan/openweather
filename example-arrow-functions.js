/**
 * Created by soundararajanvenkatasubramanian on 11/5/16.
 */
var names = ["Anbu", "Babu", "Chandran", "Damodaran", "Easwaran", "Felix", "Geetha"];

// names.forEach( (name) => {
//    console.log(name);
// });
//


var person = {
    name: 'Andrew',
    greet: function () {
        names.forEach( (name) => {
            console.log(this.name + " says hi to " + name);
        });
    }
}

person.greet();


function add(a, b){
    return a + b;
}

console.log(add(3, 4));
console.log(add(30, 40));

var addStatement = (a, b) => {
    return a + b;
}

console.log("addStatement : " + addStatement(3, 4));
console.log("addStatement : " + addStatement(30, 40));

var addExp = (a, b) =>  a + b;

console.log("addExp : " + addExp(3, 4));
console.log("addExp : " + addExp(30, 40));

