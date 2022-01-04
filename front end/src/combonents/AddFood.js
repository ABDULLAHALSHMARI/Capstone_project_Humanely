import React, { useEffect, useState } from 'react'
import axios from "axios"


export default function AddFood(){
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
      function handlesetimg(event) {
        setimg((img = event.target.value));
      }
      function handleexpired(event){
          setexpired((expired = event.target.value));
      }
      let myFood={"name":name, "title":title,"img":img ,"expired":expired} //الكلام الي بالبرتغالي هو نفسه الي بجافا الازرق الي فوق

      function handleSubmit(event) {
        event.preventDefault();
        axios({
            method:"post",
            url:"api/food/add",
            data:myFood
        })
      }
    return (
        <div>
        <main style={{}}>
<form onSubmit={handleSubmit}>
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
    onChange={handlesetimg} 
    />
    <br/>
    <input
    type="text"
    value={expired}
    name="location"
    placeholder=" location"
    onChange={handleexpired}
  />
  <br />
  <br />
  <input type="submit"
   value="submit" />
</form>
</main>
        </div>
    );
    }