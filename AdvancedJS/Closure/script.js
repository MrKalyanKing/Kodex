


let fn=()=>{
    let a=10;
    return()=>{
       console.log(a)
       let b=19;
       return ()=>{
        console.log(a)
        return ()=>{
            console.log(a)
        }
       }
    }
}

console.log(fn()()())
// let res=fn();
// let res1=res()
// let res2=res1()
// res2()

//here  fn is closure to nearest child element
// Here itself it will print 