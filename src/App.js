import React from "react";

import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomeComponent from "./components/home_component";
import AddComponent from "./components/add_component";
import AboutComponent from "./components/about_component";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomeComponent />
                </Route>
                <Route path="/submit">
                    <AddComponent />
                </Route>
                <Route path="/about">
                    <AboutComponent />
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
