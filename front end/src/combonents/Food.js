import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"



export default function Food() {

    let [name,setname] = useState("")
    let[ title, settitle] = useState("")
    let[img, setimg] = useState("")
    let[expired,setexpired] = useState("")
    
    function handlesetname(event) {
        setname((name = event.target.value));
      }
      function handlesettitle(event) {
        settitle((title = event.target.value));
      }
      function handleimg(event) {
        setimg((img = event.target.value));
      }
      function handleexpired(event){
          setexpired((expired = event.target.value));
      }

    const [data, setData] = useState([{ id: "", name: "",img:"", title:"",expired:"" }]);




    useEffect(() => {
        // debugger;  
        axios.get("/api/food")
            .then(result => setData(result.data));
        console.log(data);
        // debugger;  
    }, []);




    return (
        <div>
            <h1> List  The Foods : </h1>
            <h1>Soon</h1>
            <img src={"../public/image/kabsa.jpg"}  />
            <hr />
            {data.map(food => {
                return <div key={food.id}>
                    <h2>{food.name}</h2>
                    <img height="150 px" width="150 px" src={food.img}/>
                    <p>{food.title}</p>
                    <h2>{food.expired}</h2>
                    <hr/>
                </div>
            })}
        </div>
    )

}