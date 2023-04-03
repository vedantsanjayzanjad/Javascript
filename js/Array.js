//In the js the objects are stored as a object in the error
//mutable and can be changed

let a = [12,14,124,3452,false,"NOT-PRESENT"]
a[6]=99
a[0]=12;
console.log(a);
console.log(typeof a);

//Arrays Method

//1) toString
let n = [7,8,12];
console.log(n.toString());

//2)join
console.log(n.join('-'));

//3)pop
console.log(n.pop());
console.log(n);

//4)push
console.log(n.push(99));
console.log(n);

//5)shift
console.log(n.shift());
console.log(n);

//unshift
console.log(n.unshift(4))
console.log(n);

//delete
console.log(delete n[1]);
console.log(n);

//concat
let z = [1,3,242]
let b = [12,13,12,453223]
console.log(n.concat(b,z));

//sort()
//aplhabetically
console.log(b.sort());

//byfunction
let compare = (a,b)=>
{
    return a-b;
    //for reverse b-a
}
console.log(b.sort(compare));

//splice
//user to ad an lement to array
console.log(b.splice(4,3,786,678));
//4-add the elemts from it
//3-no of elements to be added
//786 and 678 are the elements
console.log(b);

//slice
//slice out a piece of an array to the a new piece it creates new array
//[ 12, 12, 13, 453223, 786, 678 ]
console.log(b.slice(2,5));
//2 start index
//5-elment at the fifth position

