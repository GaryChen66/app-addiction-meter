import React, { Component } from "react";
import { Link } from "react-router-dom";
import submit_logo from "../images/submit_logo.png";

import ReactGA from "react-ga";

ReactGA.initialize("UA-154738585-1"); // Here we should use our GA id

class AboutComponent extends Component {
    render() {
        console.log("about page");
        ReactGA.set({ page: "/about_page" });
        ReactGA.pageview("/about_page");
        return (
            <div className="module_wrap-4 contact_form main_contact">
                <Link to={"/"} className="link-block w-inline-block">
                    <img src={submit_logo} alt="" className="form12_logo" />
                </Link>
                <div className="form12-2">
                    <div className="container">
                        <div className="about_content">
                            <Link to={"/"} style={{ fontStyle: "italic", fontSize: "20px" }}>
                                AppAddictionMeter.com
                            </Link>
                            &nbsp;is a website that offers users a new way to rate and review mobile
                            apps.
                            <hr />
                            The addiction to our smartphones is constantly overlooked, but is a
                            serious ailment that must be further acknowledged.
                            <hr />
                            As this issue becomes more prevalent, consider assessing the apps you
                            are currently using, or plan on using, based on how addicting they are
                            according to other smartphone users.
                            <hr />
                            This site can be a tool for any user, of any age, and aims to be
                            particularly useful for parents and students.
                            <hr />
                            For more information or business inquiries please contact:
                            <hr />
                            <a
                                href="mailto:info@appaddictionmeter.com"
                                style={{ cursor: "pointer" }}
                            >
                                info@appaddictionmeter.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutComponent;
