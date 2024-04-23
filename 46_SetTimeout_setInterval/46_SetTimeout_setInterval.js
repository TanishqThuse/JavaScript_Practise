alert('Hello your next call be in 3000ms')

let a = setTimeout(function () {
    alert("I am inside of timeout")
}, 3000)


let b = prompt('Do you want to run the timeout after 3 sec ? ')
if(b=='y'){
    clearTimeout(a)
}
console.log(a)

const sum = (a,b) => {
    // console.log("Yes sir I am runnning " + a + b)
    alert("Yes sir I am runnning "+ (a + b))
    a+b
}
setTimeout(sum , 1000 , 1,2)

//Set timeout sirf ek bar run karta he
//set timeinterval bar bar bar bar run karte rehte while(infinte) value is and i guess we can only break from it


// Commenting it cause it was annoying
// setInterval(function () {
//     alert("setiinterval runngin sir")
// } , 2000)

// So use clearInterval(timeoutId)