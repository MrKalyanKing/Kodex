import express from "express"
import haversine from "haversine-distance"
const app=express()

const port=8080




app.listen(port,()=>{
    console.log("server is listening to the port 8080");
    
})

// const a=[17.33251299849265, 78.57532499529115]
// const b=[17.21445795455269, 78.65793590085906]

// let dis=haversine(a,b)/1000
// console.log(dis.toFixed(2));

const friends = [
  {
    user_id: 1,
    name: "Rahul",
    lat: 17.385044,
    lon: 78.486671
  },
  {
    user_id: 2,
    name: "Arjun",
    lat: 17.332513,
    lon: 78.575325
  },
  {
    user_id: 3,
    name: "Vikram",
    lat: 17.214458,
    lon: 78.657936
  },
  {
    user_id: 4,
    name: "Kiran",
    lat: 17.450000,
    lon: 78.380000
  },
  {
    user_id: 5,
    name: "Sandeep",
    lat: 17.295000,
    lon: 78.550000
  }
];

console.log(friends);
let t=[]
const myLocation = { lat: 17.3000, lon: 78.5000 }
friends.forEach(elem => {

    let km=haversine(myLocation,{lat:elem.lat,lon:elem.lon})/1000
    console.log(km.toFixed(0));
    
    if((km).toFixed(0) > 9 ){
        t.push(elem.user_id)
    }
    
});

console.log(t.sort((a,b)=>a-b))
