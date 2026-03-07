

//promise are main JS class 
// promise handler went to the micro task queue (.then() and .catch()) these perform the asynchronuous tasks

let pom=new Promise((resolve,rej)=>{
     
    let party=false
    if(party){
        return resolve({destination:"Taj hotel"})
    }
    return rej("No party")
})




// let pom = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
// });

// console.log("hello");

// pom
// .then(data => console.log(data))
// .catch(err => console.log(err));



// console.log("hello");
// console.log(pom);
// console.log("hello");



// promise is not actaullly Aysnc but it is class of JS ***
//


// if we  create the promise if we return resolve as fetch() in that if use some api to fetch the data so that it will dumped into macro 
// so that 
// If we create a Promise and return resolve(fetch()), and inside it we use an API to fetch data, will that operation be placed in the macrotask queue?
// so here promise will get exexuted after all the logs 



//** */ promise handlers are two types ***
// before es6 
//  1 st type
// .then() and .catch()

//implcit function
pom.then((val)=>console.log(val))
.catch((err)=>console.log(err))

console.log("hello");

setTimeout(()=>{
    console.log("yeepp");
    
},0)
console.log("Hello after timeout");


