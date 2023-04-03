//create an array by user input
//1
// let a  = [123,34,23,132,13,3]
// let b= prompt("Enter The number???")
// b = Number.parseInt(b);
// a.push(b);
// console.log(a);

//2
//Keep adding the element in an array until u put 0 in it

// let a  = [123,34,23,132,13,3]
// let b;
// do{
// let b= prompt("Enter The number???")
// b = Number.parseInt(b);
// a.push(b)
// }while(b!==0)
// console.log(a);

// console.log("Now U Cant Entered The Value");

//3
//number divisible by 10

let a  = [123,34,23,132,13,3]
let b = a.filter((x)=>
{
    return x % 10;
})
console.log(b);


//4
//Square
// let a  = [123,34,23,132,13,3]
// let b = a.map((x)=>
// {
//     return x * x;
// })
// console.log(b);

//5 Factorials
// let d  = [1,2,3,4,5]
// let e = a.reduce((x,x)=>
// {
//     return x * x;
// })
// console.log(e);