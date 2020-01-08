import React, { Component } from "react";

//Load App style
import "./App.css";

//Import components
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomeComponent from "./components/home_component";
import SubmitComponent from "./components/submit_component";
import AboutComponent from "./components/about_component";

class App extends Component {
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
