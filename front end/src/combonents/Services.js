import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Services() {

    const [myservices, setMyServices] = useState("")
    

    useEffect(() => {
        axios.get("/api/services")
            .then(response => {
                console.log(response.data)
                setMyServices(response.data)
            })
        return () => { }
    }, [])

    return (
        <div>
        <main style={{ padding: "1rem" }}>
            {/* <img = {JSON.stringify(img)} /> */}
            
            <h1>{JSON.stringify(myservices)}</h1>
        </main>
        </div>
    );
}