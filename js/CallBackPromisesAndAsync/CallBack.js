//syncho
//promt

//asynchro
// console.log("start");

// setTimeout(() => {
//     console.log("In Process");
// }, 2000);

// console.log("ENd");

//callback
function loadScript(src,callback)
{
var script= document.createElement("script")
script.src=src
script.onload = function()
{
console.log(src);
callback(src)
}

script.onerror = function()
{
    console.log("Error loading the src");
    callback(new Error("src got the new error "))
}

document.body.appendChild(script);

}

function hello(src,error)
{
    console.log("Error in " + src);
    console.log("Hello World!!",src);
}

function non(src,error)
{
       console.log("Error in " + src);
    console.log("This is the function",src);
}


// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",non)
loadScript("https://cdn.jssdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",non)