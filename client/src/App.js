import React, { Component } from "react";

import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomeComponent from "./components/home_component";
import SubmitComponent from "./components/submit_component";
import AboutComponent from "./components/about_component";

const TITLE = "Appaddiction Meter";

class App extends Component {
    componentDidMount = () => {
        document.title = TITLE;
        console.log(document);
    };

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <HomeComponent />
                        </Route>
                        <Route path="/submit">
                            <SubmitComponent />
                        </Route>
                        <Route path="/about">
                            <AboutComponent />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}
export default App;
