import React, { Component } from "react"
import "./ownerList.css"
import person from "./person.png"


export default class OwnerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the owner that the
            user clicked on by looking at the `this.props.owners`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId, 0)) || {}

        return (
            <section className="owner">
                <div className="owners">
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={person} alt="" className="icon--person" />
                                {owner.name}
                            </h4>
                            <h6 className="card-title">{owner.phoneNumber}</h6>
                                <button onClick={() => this.props.deleteOwner(owner.id)
                                    .then(() => this.props.history.push("/owners"))}
                                    className="card-link">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}