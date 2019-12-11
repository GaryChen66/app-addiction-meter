import React, { Component } from "react";
import submit_logo from "../images/submit_logo.png";

class AboutComponent extends Component {
    render() {
        return (
            <div className="module_wrap-4 contact_form main_contact">
                <a href="/" className="link-block w-inline-block">
                    <img src={submit_logo} alt="" className="form12_logo" />
                </a>
                <div className="form12-2">
                    <div className="container">
                        <div className="about_content">
                            <a href="/" style={{ fontStyle: "italic", fontSize: "20px" }}>
                                AppAddictionMeter.com
                            </a>
                            &nbsp;&nbsp;is a website that offers users a new way to rate and review
                            mobile apps.
                            <hr />
                            The addiction to our smartphones is constantly overlooked, but is a
                            serious ailment that must be further acknowledged.
                            <hr />
                            As this issue becomes more prevalent, consider assessing the apps you
                            are currently using, or plan on using, based on how addicting they are
                            according to other smartphone users.
                            <hr />
                            AppAddictionMeter can be a tool for any user, of any age, and aims to be
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
