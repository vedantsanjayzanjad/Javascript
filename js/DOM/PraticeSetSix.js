//Change the colou of navbar first child element
//1
let a = document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"
console.log(a);
document.getElementsByTagName("nav")[0].style.backgroundColor="cyan"

//2
document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"

//changing li to red
Array.from(document.getElementsByTagName("li")).forEach((element) => 
    {
        element.style.backgroundColor = "red"
    })