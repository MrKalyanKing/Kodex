let obj={
    name:"Kalyan",
    address:"Ibrahimpatnam",
    empID:"spl34",
    company:"Unosecur",
    designation:"Developer",
    project:{
        name:"E-com"
    }
}

// console.log(obj.name,obj.designation);
// Here fequently calling with obj .. to overcome introducing the destructuring

// let {name,empID,project:{name}}=obj
// console.log(name,designation,empID,name);

//Her above code get an error because js will try to creaate name in scope it is not allowed to over come that

let {name,empID,designation,project:{name:projectName}}=obj
console.log(name,designation,empID,projectName);


//Array destructing

// let arr=[1,2,3,4,5,6]

// let [a,b,c,d]=arr
// let [a, , , , ,b]=arr
// console.log(b);

// let team=[45,10]

// let[score,count]=team
// console.log(score,count);

// nested array not possible to destructure ****








