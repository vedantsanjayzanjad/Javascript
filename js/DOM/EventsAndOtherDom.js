// let x = document.getElementsByTagName("span")[0]
// console.log(x);
// let y = document.getElementsByTagName("span")[0]
// console.dir(y);//wll print the objects

// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);


//inner will give onlye inner h=tml while outer will giv the all inner + itself element

// console.log(document.body.textContent);
// console.log(document.body.firstChild.data);


//Attributes methods
let a = first.getAttribute("class");
console.log(a);
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));
first.setAttribute("class","true Sachin")
// first.removeAttribute("class")
console.log(first.attributes);
console.log(first.dataset.game);