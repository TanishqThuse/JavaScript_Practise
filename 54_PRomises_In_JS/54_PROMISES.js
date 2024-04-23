let promise = new Promise(function(resolve,reject) {
    //Idk why the below alert is not working, amybe it doesn't work on console and works on browser only
    // alert("I am an alert in Promise")
    console.log("I am an alert in Promise")
    resolve(56)
})

console.log("Hello 1st")

//The below is an asynchronous function
setTimeout(function () {
    console.log("Hello 2nd in 2 seconds")
} , 2000)

console.log("My name is " + "Hello 3rd")

//Printing the 'to be resolved' value in promise
console.log(promise)

/**Promise has two states :
 * 1) Either it gets runned (resolve) -> give values
 * 2) Get rejected -> throws error
 */

/**Psuedo code on WHY to use PROMISE
 * 1) Fetch google.com homepae
 * 2) Fetch data from data api
 * 3) Fetch pictures form the server
 * 4) Print downloading

    Basically I want to make sure 1,2,3 run parallely, think of it as i want to buy a cake (customised) , tailer make my suit, and many things like shopping, buying gifts, all these things can run parallely and i care them all done together, we can use setInterval but it created A DOM of hell (Pyramit of doom and callback hell) -> no point in doing this linearly, you dont care if you end buying a belt for your suit first even though your tailor is making suit parallely
*/

