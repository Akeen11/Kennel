import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import APIManager from "../modules/APIManager"
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import OwnerForm from './owner/OwnerForm'
import './applicationViews.css'


export default class ApplicationViews extends Component {

    // Check if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        isLoaded: false
    }

    addAnimal = animal => APIManager.add("animals", animal)
        .then(() => APIManager.getAll("animals"))
        .then(animals => this.setState({
            animals: animals
        }))

    deleteAnimal = id => APIManager.delete("animals", id)
        .then(() => APIManager.getAll("animals"))
        .then(animals => this.setState({
            animals: animals
        }))

    addOwner = owner => APIManager.add("owners", owner)
        .then(() => APIManager.getAll("owners"))
        .then(owners => this.setState({
            owners: owners
        }))

    deleteOwner = id => APIManager.delete("owners", id)
        .then(() => APIManager.getAll("owners"))
        .then(owners => this.setState({
            owners: owners
        }))

    addEmployee = employee => APIManager.add("employees", employee)
        .then(() => APIManager.getAll("employees"))
        .then(employees => this.setState({
            employees: employees
        }))

    deleteEmployee = id => APIManager.delete("employees", id)
        .then(() => APIManager.getAll("employees"))
        .then(employees => this.setState({
            employees: employees
        }))

    addLocation = location => APIManager.add("locations", location)
        .then(() => APIManager.getAll("locations"))
        .then(locations => this.setState({
            locations: locations
        }))

    deleteLocation = id => APIManager.delete("locations", id)
        .then(() => APIManager.getAll("locations"))
        .then(locations => this.setState({
            locations: locations
        }))

    componentDidMount() {

        const newState = {}

        APIManager.getAll("animals")
            .then(allAnimals => {
                newState.animals = allAnimals
            })
            .then(() => {
                APIManager.getAll("owners")
                    .then(allOwners => {
                        newState.owners = allOwners
                    })
                    .then(() => {
                        APIManager.getAll("employees")
                            .then(allEmployees => {
                                newState.employees = allEmployees
                            })
                            .then(() => {
                                APIManager.getAll("locations")
                                    .then(allLocations => {
                                        newState.locations = allLocations
                                    })
                                    .then(() => {
                                        this.setState(newState)
                                    })
                            })
                    })
            })
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalDetail {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props}
                            deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeDetail {...props}
                            deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/locations" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props}
                            deleteLocation={this.deleteLocation}
                            locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/locations/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationForm {...props}
                            addLocation={this.addLocation} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/locations/:locationId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationDetail {...props} deleteLocation={this.deleteLocation} locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props}
                            deleteOwner={this.deleteOwner}
                            owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}

