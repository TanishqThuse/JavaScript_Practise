
let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am fulfilled (either resolved of fulfilled)")
        //iF I WANT TO RESOLVE  a promise
        resolve(true)

        //If i want to throw and error
    //     reject(new Error("I am an error solve me :<"))
    } , 5000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am fulfilled (either resolved of fulfilled)")
        // iF I WANT TO RESOLVE  a promise
        resolve(true)
        // If i want to throw and error
        // reject(new Error("I am an error solve me :<"))
    } , 5000)
})

//If i want to print it
// console.log(p1,p2)

//If i am 'vella' person and i have a job to be done after the promise is fulfileld i do the below
p1.then((value)=>{
    console.log(value)
})
// p2.then((value)=>{
//     console.log(value)
// })

console.log("NEW START HERE")

//idk man why it is not working below
// let promise = new Promise(resolve={
//     setTimeout(() => resolve ("done"),1000);
// }, );

// a better war
p2.then((value)=>{
    console.log(value)
}, (error)=>{
    console.log(value)
})

























