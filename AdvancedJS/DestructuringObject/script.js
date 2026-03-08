// let obj={
//     name:"Kalyan",
//     address:"Ibrahimpatnam",
//     empID:"spl34",
//     company:"Unosecur",
//     designation:"Developer",
//     project:{
//         name:"E-com"
//     }
// }

// console.log(obj.name,obj.designation);
// Here fequently calling with obj .. to overcome introducing the destructuring

// let {name,empID,project:{name}}=obj
// console.log(name,designation,empID,name);

//Her above code get an error because js will try to creaate name in scope it is not allowed to over come that

// let {name,empID,designation,project:{name:projectName}}=obj
// console.log(name,designation,empID,projectName);


//Array destructing

// let arr=[1,2,3,4,5,6]

// let [a,b,c,d]=arr
// let [a, , , , ,b]=arr
// console.log(b);

// let team=[45,10]

// let[score,count]=team
// console.log(score,count);

// nested array not possible to destructure ****

// let objs={
//     name:"Kalyan",
//     team:"csk"
// }
// let objs1=objs
//Here objs1 with refernce(Address) to the same object (objs)

// objs1.name="Sweety"
// console.log(objs.name);


// spread operator
// let object={
//     name:"Kalyan",
//     team:"csk"
// }

// Here created an object with different refernce
// let obj2={...object} 
// obj2.name="SweetLove"
// console.log(obj2.name);
// console.log(object.name);
// console.log(obj2);

//Deep Copy ** 

let obj ={
    name:"santoor",
    category:"soap",
    colors:{
        name:"orange",
        quantity:10
    }
}

// let obj2 = JSON.parse(JSON.stringify(obj))
let obj2 = structuredClone(obj)

obj2.name="LifeBoy"

obj2.colors.name="white"

// here color name is changing to white 
console.log(obj2);
console.log(obj);

console.log(obj.name);

console.log(obj2.name);

// A shallow copy copies only the top-level properties, while nested objects are copied by reference.
// A deep copy duplicates all nested objects, creating completely independent objects.










