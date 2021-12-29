import React, { Component } from "react";
import axios from "axios";


export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
        food: []
    };
  }
  
  componentDidMount() {
    axios.get("/api/food")
     .then(response => {
     const food=  response.data
     this.setState({food});
    });
  }

  deleteContact(id) {
    axios.delete(`/api/food/delete/${id}`)
      .then(res => {
      const food = this.state.food.filter(item => item.id !== id);
      this.setState({ food });
    })
  }
        
  render() {
    return (
      <div>
        <h1> List  Of   Food : </h1>
          <hr />
          {this.state.food.map((item => (
               <div key={item.id}>
                  <img height="110 px" width="110 px" src={item.img} />
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                  <p>{item.expired}</p>
                  <button onClick={(e) => this.deleteContact(item.id, e)}>Click to Delete</button>
                  <hr />
              </div>
           ))) 
          }
     </div>
    );
  }
}
// _____________________________________________________________________________________________________________________

// import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios"



// export default function Food() {

//     let [name,setname] = useState("")
//     let[ title, settitle] = useState("")
//     let[img, setimg] = useState("")
//     let[expired,setexpired] = useState("")
//     let[foody,setfoody] = useState("")

//     function handlesetname(event) {
//         setname((name = event.target.value));
//       }
//       function handlesettitle(event) {
//         settitle((title = event.target.value));
//       }
//       function handleimg(event) {
//         setimg((img = event.target.value));
//       }
//       function handleexpired(event){
//           setexpired((expired = event.target.value));
//       }
// function deleteContact(id) {
//         axios.delete(`/api/food/delete/${id}`)
//           .then(res => {
//           const food = food.filter(data => data.id !== id);
//           this.setState({ food });
//         })
//       }
//     const [data, setData] = useState([{ id: "", name: "",img:"", title:"",expired:"" }]);


//     useEffect(() => {
//         // debugger;  
//         axios.get("/api/food")
//             .then(result => setData(result.data));
//         console.log(data);
//         // debugger;  
//     }, []);



//     return (
//         <div>
//             <h1> List  The Foods : </h1>
//             <h1>Soon</h1>
//             <img src={"../public/image/kabsa.jpg"}  />
//             <hr />
//             {data.map(food => {
//                 return <div key={food.id}>
//                     <h2>{food.name}</h2>
//                     <img height="150 px" width="150 px" src={food.img}/>
//                     <p>{food.title}</p>
//                     <h2>{food.expired}</h2>
//                     <hr/>
//                     <button onClick={deleteContact(food)}>Delete</button>
//                 </div>
//             })}
//         </div>
//     )

// }