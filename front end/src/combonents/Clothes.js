import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clothes: []
    };
  }
  
  componentDidMount() {
    axios.get("/api/clothes")
     .then(response => {
     const clothes=  response.data
     this.setState({clothes});
    });
  }

  deleteContact(id) {
    axios.delete(`/api/clothes/delete/${id}`)
      .then(res => {
      const clothes = this.state.clothes.filter(item => item.id !== id);
      this.setState({ clothes });
    })
  }
        
  render() {
    return (
      <div>
        <h1> List  Of   Clothes : </h1>
        <Link to="/AddClothes"><button>Add Clothes</button></Link>
          <hr />
          {this.state.clothes.map((item => (
               <div key={item.id}>
                  <img height="110 px" width="110 px" src={item.img} />
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                  <p>{item.size}</p>
                  <button onClick={(e) => this.deleteContact(item.id, e)}>Get It</button>
                  
                  <hr />
              </div>
           ))) 
          }
     </div>
    );
  }
}







// __________________________________________________________________________________________________________
// // import React, { useEffect, useState } from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import axios from 'axios';



// // export default function Clothes() {

// //     let [name,setname] = useState("")
// //     let[ title, settitle] = useState("")
// //     let[img, setimg] = useState("")
// //     let[size,setsize] = useState("")
    
    
// //     function handlesetname(event) {
// //         setname((name = event.target.value));
// //       }
// //       function handlesettitle(event) {
// //         settitle((title = event.target.value));
// //       }
// //       function handleimg(event) {
// //         setimg((img = event.target.value));
// //       }
// //       function handlesize(event){
// //           setsize((size = event.target.value));
// //       }

// //     const [data, setData] = useState([{ id: "", name: "",img:"", title:"",size:"" }]);


// //     useEffect(() => {
// //         // debugger;  
// //         axios.get("/api/clothes")
// //             .then(result => setData(result.data));
// //         console.log(data);
// //         // debugger;  
// //     }, []);



// //     return (
// //         <div>
// //             <h1> List  The clothes : </h1>
// //             <h1>Soon</h1>
// //             <hr />
// //             {data.map(clothes => {
// //                 return <div key={clothes.id}>
// //                     <h2>{clothes.name}</h2>
// //                     <img height="150 px" width="150 px" src={clothes.img}/>
// //                     <p>{clothes.title}</p>
// //                     <h2>{clothes.size}</h2>
// //                     <hr/>
// //                     <button>Add</button>
// //                 </div>
// //             })}
// //         </div>
// //     )

// // }