import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'



export default function AddFood() {
  let [name, setname] = useState("")
  let [title, settitle] = useState("")
  let [img, setimg] = useState("")
  let [expired, setexpired] = useState("")


  function handlesetname(event) {
    setname((name = event.target.value));
  }
  function handlesettitle(event) {
    settitle((title = event.target.value));
  }
  function handlesetimg(event) {
    setimg((img = event.target.value));
  }
  function handleexpired(event) {
    setexpired((expired = event.target.value));
  }
  let myFood = { "name": name, "title": title, "img": img, "expired": expired } //الكلام الي بالبرتغالي هو نفسه الي بجافا الازرق الي فوق

  function handleSubmit(event) {
    alert("Added, Jzak Allah Khir")
    event.preventDefault();
    axios({
      method: "post",
      url: "api/food/add",
      data: myFood
    })
  }
  return (
    <div>
      <main style={{}}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            class="textbox"
            value={name}
            name="name"
            placeholder=" name"
            onChange={handlesetname}
          />
          <br /> <br />
          <input
            type="text"
            class="textbox"
            value={title}
            name="title"
            placeholder=" title"
            onChange={handlesettitle}
          />
          <br />  <br />
          <input
            placeholder="img"
            type="text"
            class="textbox"
            value={img}
            name="img"
            onChange={handlesetimg}
          />  <br />
          <br />
          <input
            type="text"
            class="textbox"
            value={expired}
            name="location"
            placeholder=" location"
            onChange={handleexpired}
          />
          <br />
          <br />
          <input type="submit"
            value="submit"
             />
        </form>
      </main>
    </div>
  );
}