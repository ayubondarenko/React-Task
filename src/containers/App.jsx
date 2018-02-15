import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "webpack-icons-installer/bootstrap";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../App.css";
import Main from "./Main.jsx";
import pic from "../images/test.svg";

class App extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-dark  navbarText">

                    <img src={pic} width="30" height="30" alt="test"/>
                    &nbsp;&nbsp;&nbsp;
                    <h3 ><span class="glyphicon glyphicon-knight"></span>&nbsp;&nbsp;&nbsp; React test task </h3>

                </nav>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-2 bg-light">

                            <div class="container " >
                                <Link class="btn btn-outline-primary titleButton" to={'/departments/'}><h4> Departments</h4></Link>
                                <Link class="btn btn-outline-primary titleButton" to={'/employees/'}><h4>Employees</h4></Link>
                            </div>
                        </div>
                        <div class="col-12 col-md-10">
                            <Main/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
