import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./homePage.css"
import map from "./nashvilleMap.png"

export default class HomePage extends Component {

    render() {
        return (
            <section className="homePage">
                {
                    <div>
                        <h1 className="header">Home:</h1>
                        <section className="home">
                            <img src={map} alt="" className="icon--map" />
                        </section>
                    </div>
                }
            </section>
        )
    }
}