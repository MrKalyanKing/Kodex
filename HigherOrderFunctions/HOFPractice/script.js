// let abcd=()=>{
//     return 9
// }

// console.log(abcd())

// here abcd is higher order function
// let abcd=()=>{
//     return ()=>{
//         console.log("me inner print ")
//         return 0; 
//     }
// }
// let res=abcd()

// console.log(res()) 
//here print "me inner print and undefined " here undefined prints beacuse the function was not retunrning

// console.log(abcd()()) 
// here extra () will call the inner  function of abcd
// return 0;  by this it will not print the undefined

// (abcd()())  it is an argument  function accepts the parameter

let abcd = (a)=>{
    console.log(a());
}
// abcd(()=>{
    //here print undefined after log 
    // console.log("iam from argument") 
    // return "iam from argument"
// })

console.log(abcd(()=>{
    console.log("param fn")
}))
//here it can  print two undefined

