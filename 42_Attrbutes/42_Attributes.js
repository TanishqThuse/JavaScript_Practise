/* Notes : 
    Element.getAttribute(name) -> methdo to get value of the getAttribute

    Element.setAttribute(name , value) -> set value of $name attribute to the $value

    similar are 
    Element.removeAttribute(name)

    Element.attributes -> gives collection of attributes
*/

let a = document.getElementById("first") 
// a = a.getAttribute("class")
console.log(a)
console.log(a.hasAttribute("class")) //checks if it has any attribute class(here it ws hey)
console.log(a.hasAttribute("style"))

/* Atual way of doing the below things is */
// first.setAttribute("hidden","true")

let first = document.getElementById("first")
first.setAttribute("hidden"  , true)
first.setAttribute("class" , "true sachin")

let myDiv = document.getElementsByTagName("div")
console.log(myDiv.getAttributes)
console.log(first.getAttribute)

/*Custome attributes Dataset in javascript can be created

The data-* are reserved for programmers to create custom dataset

here in html i have created data-game => custom attribute

The data-* attribute is used to store custom data private to the page or application.

The data-* attribute gives us the ability to embed custom data attributes on all HTML elements.*/

console.log(first.dataset)
console.log(first.dataset.player)



