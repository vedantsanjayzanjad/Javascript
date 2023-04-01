//let and const are scope level let can be updated but not redclared whereas const can not be redeclared and aslo not be updated
//var is globally scope so we are not using var bcz it creats bugs

let a = "ok by a"
const b = 'ok by b'
var c = 'ok by c'

{
    let a = "not by let"
    var c = "not by var"
    const b = "not by const"
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
//var is not be the same as it is
//let and const are scope level so changes within the scope will be within the block only