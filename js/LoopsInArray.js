//for
let a = [1,2,3,45,44]
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}


//forEach
a.forEach(e =>{
    console.log(e);
});

//Array.form
// let name = 'Vedant',
// console.log(Array.from(name));

for(let arr  of a)
{
    console.log(arr);
}

for(let arr in a)
{
    console.log(a[arr]);
    console.log(arr);//keys
}