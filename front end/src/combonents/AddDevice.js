import React, { useEffect, useState } from 'react'
import axios from "axios"


export default function AddDevice(){
    let [name,setname] = useState("")
    let[ title, settitle] = useState("")
    let[img, setimg] = useState("")
    let[size,setsize] = useState("")

    function handlesetname(event) {
        setname((name = event.target.value));
      }
      function handlesettitle(event) {
        settitle((title = event.target.value));
      }
      function handlesetimg(event) {
        setimg((img = event.target.value));
      }
      function handlesize(event){
          setsize((size = event.target.value));
      }
      let myDevice={"name":name, "title":title,"img":img ,"size":size} //الكلام الي بالبرتغالي هو نفسه الي بجافا الازرق الي فوق

      function handleSubmit(event) {
        event.preventDefault();
        axios({
            method:"post",
            url:"api/ElectricDevice/add",
            data:myDevice
        })
      }
    return (
        <div>
        <main style={{}}>
<form onSubmit={handleSubmit}>
    <h1>Devices</h1>
  <input 
    type="text"
    value={name}
    name="name"
    placeholder=" name"
    onChange={handlesetname}
  />
  <br />
  <input
    type="text"
    value={title}
    name="title"
    placeholder=" title"
    onChange={handlesettitle}
  />
  <br />
  <input
    placeholder="img"
    type="text"
    value={img}
    name="img"
    onChange={handlesetimg} />
    
  <br />
  <br />
  <input
    placeholder="size"
    type="text"
    value={size}
    name="size"
    onChange={handlesize} />
    
    <input type="submit"
   value="submit" />
</form>
</main>
        </div>
    );
    }