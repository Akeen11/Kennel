import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./ownerList.css"
import person from "./person.png"

export default class OwnerList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        Add Owner
                                </button>
                </div>
                <hr />
                <section className="owners">
                    {
                        <div>
                            <h1 className="header">Our Owners:</h1>
                            <section className="owners">
                                {
                                    this.props.owners.map(owners =>
                                        <div id={`owner--${owners.id}`} key={owners.id} className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img src={person} alt="" className="icon--person" />
                                                    {owners.name}
                                                    <Link className="nav-link" to={`/owners/${owners.id}`}>Details</Link>
                                                        <button onClick={() => this.props.deleteOwner(owners.id)}
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