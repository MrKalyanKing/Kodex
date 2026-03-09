


let response=fetch("https://fakestoreapi.com/products")

response.then((val)=> val.json() )
.then((val)=>console.log(val))


//here fetch will accept the data in the chunks it is low level design based on the browser (default browser)
// thus why all the chunks will get together converts into readable stream
// default behaviour of browser will accept the data in the form of chunks

//streams 
//here readable is browser part it return the promise


// ** AJAX **//

//asynchronous javascript xml

// ajax -- > fetch --> browser

//browser provides 4 types network api(xml,fetch),  dom events(action),  dom apis(selection), timer