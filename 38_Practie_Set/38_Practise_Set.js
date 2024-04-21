// document.getElementsByTagName("nav")[0].firstElementChild[0] = 

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "cyan"

//element nav ke first and last chld ko yellw kardo

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "yellow"

document.getElementsByTagName("nav")[0].lastElementChild.style.color = "yellow"

//Using loop

//What is array.from? -> it is used to make sure we can use array's methods
Array.from(document.getElementsByTagName("li")).forEach((Element)=>{
    Element.style.background = "red"
})