let a = document.getElementsByTagName('div')[0]

let mydiv = document.createElement('div')
mydiv.innerHTML = "<h1>Appending h1 after BODY</h1>"
a.append(mydiv)

let mydivPrepend = document.createElement('div')
mydivPrepend.innerHTML =  "<h1>Appending h1 before(or prepending) BODY</h1>"
// mydivPrepend = "<h1>Appending h1 before(or prepending) BODY</h1>"
a.prepend(mydivPrepend)

//before() method
let divToGoAfter
divToGoAfter = document.createElement('div')
divToGoAfter.innerHTML  = "<h3>H3 BEFORE</h3>"
a.before(divToGoAfter)
// a.after(divToGoAfter)

/**Other mehtods : 
 * node.append(e) 
 * node.prepend(e) 
 * node.before(e) 
 * node.after(e)
 * node.replaceWith(e)
 */



// a.replaceWith(divToGoAfter)