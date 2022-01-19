import React, { useEffect, useState } from 'react'
import axios from "axios"


export default function AddClothes() {
  let [name, setname] = useState("")
  let [title, settitle] = useState("")
  let [img, setimg] = useState("")
  let [size, setsize] = useState("")

  function handlesetname(event) {
    setname((name = event.target.value));
  }
  function handlesettitle(event) {
    settitle((title = event.target.value));
  }
  function handlesetimg(event) {
    setimg((img = event.target.value));
  }
  function handlesize(event) {
    setsize((size = event.target.value));
  }
  let myCloth = { "name": name, "title": title, "img": img, "size": size } //الكلام الي بالبرتغالي هو نفسه الي بجافا الازرق الي فوق

  function handleSubmit(event) {
    alert("Added, Jzak Allah Khir")
    event.preventDefault();
    axios({
      method: "post",
      url: "api/clothes/add",
      data: myCloth
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
          <br /> <br/>
          <input
            type="text"
            class="textbox"
            value={title}
            name="title"
            placeholder=" title"
            onChange={handlesettitle}
          />
          <br /> <br/>
          <input
            placeholder="img"
            class="textbox"
            type="text"
            value={img}
            name="img"
            onChange={handlesetimg} />

          <br />
          <br />
          <input
            placeholder="size"
            type="text"
            class="textbox"
            value={size}
            name="size"
            onChange={handlesize} />
<br /><br /> <br/>
          <input type="submit"
            value="Add" />
        </form>
      </main>
    </div>
  );
}