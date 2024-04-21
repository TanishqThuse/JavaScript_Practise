//Matches, closet and contains methods in js

// .matches -> 
// .closet -> check if the element is a css selector and returns it, else goes on for it's parent
// .contains -> checks if id1.contains(sp1) -> returns bool, always if id1.contains(id1)-> false


let id1 = document.getElementById("id1")
let sp1 =document.getElementById("sp1")

//The below are css selectors like class and id
console.log(id1)
console.log(id1.matches(".class")) //--> since id1 is a id
console.log(id1.matches(".box"))

console.log(sp1.closest(".box")) //--> checks to copare which one is box css selector

console.log(sp1)


