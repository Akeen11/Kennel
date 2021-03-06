import React, { Component } from "react"
import "./locationList.css"

export default class LocationForm extends Component {
    // Set initial state
    state = {
        locationName: "",
        address: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating location object, and
        invoking the function reference passed from parent component
     */
    constructNewLocation = evt => {
        evt.preventDefault()
        const location = {
            name: this.state.locationName,
            address: this.state.address,
        }

        // Create the location and redirect user to location list
        this.props.addLocation(location).then(() => this.props.history.push("/locations"))
    }


    render() {
        return (
            <React.Fragment>
                <form className="locationForm">
                    <div className="form-group">
                        <label htmlFor="locationName">Location Name</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="locationName"
                            placeholder="Location Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="address" placeholder="Address" />
                    </div>
                    <button type="submit" onClick={this.constructNewLocation} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}