import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Device.css"
export default class ElectricDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Device: []
    };
  }
  
  componentDidMount() {
    axios.get("/api/ElectricDevice")
     .then(response => {
     const Device=  response.data
     this.setState({Device});
    });
  }

  deleteContact(id) {
      
    axios.delete(`/api/ElectricDevice/delete/${id}`)
      .then(res => {
      const Device = this.state.Device.filter(item => item.id !== id);
      this.setState({ Device });
    })
  }
        
  render() {
    if (localStorage.getItem("logined") == "yes") {
    return (
      <div>
        <h1> List  Of   Devices : </h1>
        <Link to="/AddDevice"><button>Add Electric Device</button></Link>
          <hr />
          <div className="card">
          {this.state.Device.map((item => (
               <div key={item.id}>
                  <img height="110 px" width="110 px" src={item.img} />
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                  <p>{item.size}</p>
                  <button onClick={(e) => this.deleteContact(item.id)}>Get It</button>
                  <hr />
              </div>
           ))) 
          }</div>
     </div>
    );}
    else{return (
      <div>
        <h1> List  Of   Devices : </h1>
        <Link to="/AddDevice"><button>Add Electric Device</button></Link>
          <hr />
          {this.state.Device.map((item => (
               <div key={item.id}>
                  <img height="150px" width="150 px" src={item.img} />
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                  <p>{item.size}</p>
                  <Link to="/Login"><button>Get It</button></Link>
                  <hr />
              </div>
           ))) 
          }
     </div>
    );}
  }
}