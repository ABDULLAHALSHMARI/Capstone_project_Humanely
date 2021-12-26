import React, { useEffect, useState } from 'react'
import axios from "axios"



export default function ComponentHome() {

    const [data, setData] = useState([{ id: "", name: "",img:"", title:"",expired:"" }]);




    useEffect(() => {
        // debugger;  
        axios
            .get("/lawyers")
            .then(result => setData(result.data));
        console.log(data);
        // debugger;  
    }, []);




    return (
        <div>
            <h1> List  Services : </h1>
            <h1>Soon</h1>
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