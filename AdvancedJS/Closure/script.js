


// let fn=()=>{
//     let a=10;
//     return()=>{
//         a=20
//        console.log(a)
//        let b=19;
//        return ()=>{
//         console.log(a)
//         return ()=>{
//             return a
//         }
//        }
//     }
// }

// console.log(fn()()()())
// let res=fn();
// let res1=res()
// let res2=res1()
// res2()

//here  fn is closure to nearest parent element
// Here itself it will print 

// pure and impure functions

// let fn=()=>{
//     let a=90
//     a=100;
//     console.log(a);
    
// }
// fn()

// Here this function called pure functions

let a=90
let fn=()=>{
    a=100;
    console.log(a);
    
}
fn()

// Here this functions is called impure function a is declared outside of block