import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Clothes.css';

export default class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clothes: [],
        enter: localStorage.getItem("logined")
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
      alert("you takke it")
      this.setState({ clothes });
    })
  }
        
  render() {
    if (localStorage.getItem("logined") == "yes") {
    return (
      <div>
        <h1 className="work-title"> List  Of   Clothes : </h1>
        <Link to="/AddClothes"><button>Add Clothes</button></Link>
          <hr />
          <div className="flex-container">
          {this.state.clothes.map((item => (
               <div key={item.id}>
                 <div className="container">
                  <img height="150px" width="150 px" src={item.img} />
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                  <p>{item.size}</p>
                  <button onClick={() => this.deleteContact(item.id)}>Get It</button>
                  
                  <hr />
                  </div>
              </div>
           ))) 
          }</div>
     </div>
    );}else{
      return (
      <div>
        <h1 className="work-title"> List  Of   Clothes : </h1>
        <Link to="/AddClothes"><button>Add Clothes</button></Link>
          <hr />
          <div className="flex-container">
          {this.state.clothes.map((item => (
               <div key={item.id}>
                 <div className="container">
                  <img height="150px" width="150 px" src={item.img} />
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                  <p>{item.size}</p>
                  <Link to="/Login"><button>Get It</button></Link>
                  
                  <hr />
                  </div>
              </div>
           ))) 
          }</div>
     </div>
    );
}}}