

let res=fetch("https://fakestoreapi.com/products")

let resolver =async()=>{
    // let res1=  await res
    // let res2= await res1.json()
    // console.log(res2)
    let res1 =await (await res).json()
    console.log(res1)
}
resolver()