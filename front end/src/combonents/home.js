import React, { useEffect, useState } from "react";
import axios from "axios";
import { Component } from "react/cjs/react.production.min";

export default function Home() {


    const [myhome, sethome] = useState("")


    axios.get("/api/home")
        .then(response => {
            console.log(response.data)
            sethome(response.data)
        })

    // useEffect(() => {
    //     axios.get("/api/home")
    //         .then(response => {
    //             console.log(response.data)
    //             sethome(response.data)
    //         })
    //     return () => { }
    // }, [])

    return (
        <main style={{ padding: "1rem" }}>
            <h1>Come Soon</h1>
            
<img src="img.jap" />
            
            {/* <h1>{JSON.stringify(myhome)}</h1> */}
        </main>
    );
}