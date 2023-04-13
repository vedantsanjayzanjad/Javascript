
let btn = document.getElementById('btn')

let x  =function (e) {
    alert("Hello World!!")
}

let y  =function (e) {
    alert("Hello World2!!")
}


btn.addEventListener('click',x)


btn.addEventListener('click',y)


let a = prompt("what is ur fav number")

if(a =="2")
{
 btn.removeEventListener('click',y)
}