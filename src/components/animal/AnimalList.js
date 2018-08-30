import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./animalList.css"
import { Link } from "react-router-dom"

export default class AnimalList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                                </button>
                </div>
                <hr />
                <section className="animals">
                    {
                        <div>
                            <h1 className="header">Our Animals:</h1>
                            <section className="animals">
                                {
                                    this.props.animals.map(animals =>
                                        <div id={`animal--${animals.id}`} key={animals.id} className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img src={dog} alt="" className="icon--dog" />
                                                    {animals.name}
                                                    <Link className="nav-link" to={`/animals/${animals.id}`}>Details</Link>
                                                        <button onClick={() => this.props.deleteAnimal(animals.id)}
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