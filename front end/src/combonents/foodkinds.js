import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Service from './Service';
import Button from 'react-bootstrap/Button'
export default class Crime extends Component {
    constructor(props){
    super(props)
        this.state = {
            employees:[]
        }
    }
    addEmployee=()=>{
        this.props.history.push("add");
    }
    componentDidMount(){
        Service.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row' padding="">
                <Link to="/add" className=''>
                <Button variant="primary">Primary</Button>{' '}
                    </Link>{""}
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                      <thead>
                          <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Department</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                             <td> { employee.name} </td>
                                             <td> {employee.email}</td>
                                             <td> {employee.gender}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}