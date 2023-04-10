//Three main nodes in DOM

//1) Text Node - it is the leaf of a tree once removed////
//2)Elements Node
//3)Comment node

//Autocorection -if u forget the closing tag then it will be understand by the dom
<html>
    <head>
        Hello World!!
    </head>
        <body>

        </body>
</html>

//document.title is the string
//document.documentElement is the object


//Accessing the child element
// direct or deeply nested element of an element is called as children element

//child node - direct child of an element
//for rg head and body are child node of the html tag

//Descendent node - All nested elements children their children...
//for e.g.
//console.log(document.body.firstchild)//body.lastchild//body.childnodes(numbers and name)

//followings are always true
// 1) element.childNode[0] = elemFirstChild
// 2) element.childNodes[element.childNodes.length-1]===element.lastChild
//there is also a method element.hasChild() to check whethere the element having is child of any
//child looks like an arraybbut it is not an array its a collection and we can convert it into an array by array.form()


//parents and sibling of an element 
//Notes:: on dom collection
//a)they are read only
//b)they are iterable using for of loop 
//c)if childnodes of elemnt is changed it will automatically update

//d) In brpswer console if u select $0 it will give the link and by $1 it will gave the the last sleect link

//<head></head> and <body></body> are siblings where body said to be the left or previous siblings
//{$0.nextsibling}
//parent node ->Document will return
//parent element - if it is return it will return otherwise it will return null


//if you want siblings or node then you have to remove the space and make it in one line
//<body><div class="first">first</div></body>