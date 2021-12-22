import React,{useEffect , useState} from "react";
import axios from "axios"
function User(){

let [username,setusername] = useState("")
let[ Email, setEmail] = useState("")
let[password, setpassword] = useState("")

function handlesetusername(event) {
    setusername((username = event.target.value));
  }
  function handlesetEmail(event) {
    setEmail((Email = event.target.value));
  }
  function handlepassword(event) {
    setpassword((password = event.target.value));
  }
  let mydata={"username":username, "email":Email,"password":password} //الكلام الي بالبرتغالي هو نفسه الي بجافا الازرق الي فوق
  function handleSubmit(event) {
    event.preventDefault();
    axios({
        method:"post",
        url:"api/user/add",
        data:mydata
    })
  }
return(
<main style={{}}>
<form onSubmit={handleSubmit}>
  <input
    type="text"
    value={username}
    name="username"
    placeholder=" username"
    onChange={handlesetusername}
  />
  <br />
  <input
    type="text"
    value={Email}
    name="Email"
    placeholder=" Email"
    onChange={handlesetEmail}
  />
  <br />
  <input
    placeholder="password"
    type="text"
    value={password}
    name="password"
    onChange={handlepassword} />
  <br />
  <br />
  <input type="submit"
   value="submit" />
</form>
</main>
);
}
export default User;