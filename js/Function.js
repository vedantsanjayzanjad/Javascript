//Function is used to avoid the repeated action

// function myFunction()
// {
//     //code
// }

// function myFunction(a,b)
// {
//     //code
//     //can return (a + b)
// }


function myFunction(a , b)
{
    return (a + b)
}

console.log(myFunction(3,6));


//with parameter second way

const sum =(p,q)=>
{
    return p+q
}
console.log(sum(6,7));

//Without paramter in second way

const print=()=>
{
    console.log("Hello World!!");
}

let v = print()
console.log(v);
