
// function loadScript(src) {
//     var script = document.createElement("script")
//     script.src = src
//     document.body.appendChild(script)
//     script.onload = function() {
//         console.log("Loaded script with :" +  "SRC : " + src)
//     }
//     document.body.appendChild(script)
// }

function hello(callback){
    alert("helo")
    callback()
    
}

function bye() {
    alert("BYE")
}

// loadScript("https://cdn.jsdeliver.net.js")
loadScript("https://hello.js")




function hello(error, src){
    alert("Helo + " + src)
}
function goodmorning(src) {
    alert('goodmorning' + src)
}

loadScript(" ")