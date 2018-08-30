import React, { Component } from "react"
import "./locationList.css"
import house from "./house.png"
import map from "./nashvilleMap.png"


export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the location that the
            user clicked on by looking at the `this.props.locations`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId, 0)) || {}

        return (
            <section className="location">
                <div className="locations">
                    <div key={location.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={house} alt="" className="icon--house" />
                                {location.name}
                            </h4>
                            <h6 className="card-title">{location.name}</h6>
                                <button onClick={() => this.props.deleteLocation(location.id)
                                    .then(() => this.props.history.push("/locations"))}
                                    className="card-link">Delete</button>
                        </div>
                    </div>
                </div>
                <section className="map">
                    <img src={map} alt="" className="icon--map" />
                </section>
            </section>
        )
    }
}