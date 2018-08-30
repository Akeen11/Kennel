import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./employeeList.css"
import person from "../owner/person.png"

export default class EmployeeList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Add Employee
                                </button>
                </div>
                <hr />
                <section className="employees">
                    {
                        <div>
                            <h1 className="header">Our Employees:</h1>
                            <section className="employees">
                                {
                                    this.props.employees.map(employees =>
                                        <div id={`employee--${employees.id}`} key={employees.id} className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img src={person} alt="" className="icon--person" />
                                                    {employees.name}
                                                    <Link className="nav-link" to={`/employees/${employees.id}`}>Details</Link>
                                                        <button onClick={() => this.props.deleteEmployee(employees.id)}
                                                            className="card-link">Delete</button>
                                                </h5>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        </div>
                    }
                </section>
            </React.Fragment>
        )
    }
}