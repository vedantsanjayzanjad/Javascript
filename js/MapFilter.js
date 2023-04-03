//forEach
//calls a function for each element in array

const a = [1,233,43,423,2]
a.forEach(e =>
    {
        console.log(e);
    })

//map
//create an new array by performing the operation on each element of an array
const b = [12,23,231,1,2]
let d = a.map((x,y,a)=>
{
    return x *x;
})
console.log(d);


//filter
//filter an array with values that passes a test creates an aaray
b.filter((a)=>
{
    return a<200;
})
console.log(b);


//reduce 
//reduce the array in single value
let c = b.reduce((ha,rrry) =>
{
    return ha+rrry;
}
)
console.log(c);