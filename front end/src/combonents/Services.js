import React, { useEffect, useState } from 'react'
import { Outlet, NavLink, useSearchParams } from "react-router-dom";
import axios from "axios"
import Food from "./Food"
import Clothes from './Clothes';
import ElectricDev from "./ElectricDev";
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
        <main style={{ padding: "1rem 0" }}>
            <h2>Services</h2>
            <div style={{ display: "flex", color: "#43A6AC" }}>
                <nav
                    style={{
                        borderRight: "solid 1px",
                        padding: "1rem"
                    }}
                >
                    <NavLink
                        style={({ isActive }) => ({ display: "block", margin: "1rem 0", color: isActive ? "#43A6AC" : "" })}
                        to={'/Services/food'}
                        key={"food"}
                    >
                        Food
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => ({ display: "block", margin: "1rem 0", color: isActive ? "#43A6AC" : "" })}
                        to={"/Services/clothes"}
                        key={"clothes"}
                    >
                        Clothes
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => ({ display: "block", margin: "1rem 0", color: isActive ? "#43A6AC" : "" })}
                        to={"/Services/electricDev"}
                        key={"electricDev"}
                    >
                        Electric Devices
                    </NavLink>

                    {/* Electric Devices */}
                </nav>
                <Outlet />
            </div>

            
        </main>
    );
}