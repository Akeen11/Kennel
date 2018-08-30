import React, { Component } from "react"
import "./employeeList.css"
import person from "../owner/person.png"


export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the employee that the
            user clicked on by looking at the `this.props.employees`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId, 0)) || {}

        return (
            <section className="employee">
                <div className="employees">
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={person} alt="" className="icon--person" />
                                {employee.name}
                            </h4>
                            <h6 className="card-title">{employee.name}</h6>
                                <button onClick={() => this.props.deleteEmployee(employee.id)
                                    .then(() => this.props.history.push("/employees"))}
                                    className="card-link">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}