import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./locationList.css"
import house from "./house.png"

export default class LocationList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="locationButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/locations/new")
                        }
                        }>
                        Add Location
                                </button>
                </div>
                <hr />
                <section className="locations">
                    {
                        <div>
                            <h1 className="header">Our Locations:</h1>
                            <section className="locations">
                                {
                                    this.props.locations.map(locations =>
                                        <div id={`location--${locations.id}`} key={locations.id} className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img src={house} alt="" className="icon--house" />
                                                    {locations.name}
                                                    <Link className="nav-link" to={`/locations/${locations.id}`}>Details</Link>
                                                        <button onClick={() => this.props.deleteLocation(locations.id)}
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