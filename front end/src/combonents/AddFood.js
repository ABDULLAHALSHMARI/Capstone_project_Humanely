// import React, { useEffect, useState } from 'react'
// import axios from "axios"


// export default function AddFood(){

// const [data, setData] = useState([{ id: "", name: "",img:"", title:"",expired:"" }]);
    
// function handlesetdata(event) {
//     setData((data = event.target.value));
//   }
//     useEffect(() => {
//         axios.get("/api/food")
//             .then(response => {
//                 console.log(response.data)
//                 setData(response.data)
//             })
            
//         return () => { }
//     }, [])
//     return (
//         <div>
//         <main style={{ padding: "1rem" }}>
//             {/* <img = {JSON.stringify(img)} /> */}
            
//             <h1>{JSON.stringify(data)}</h1>
//             <input
//     type="text"
//     value={data.name}
//     name="name"
//     placeholder=" name"
//     onChange={handlesetdata}
//   />
//         </main>
//         </div>
//     );
//     }