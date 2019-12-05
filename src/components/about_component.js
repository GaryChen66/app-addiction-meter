import React, { Component } from "react";
import logo from "../images/title_logo.png";

class AboutComponent extends Component {
    render() {
        return (
            <div className="module_wrap-4 contact_form main_contact">
                <a href="/" className="link-block w-inline-block">
                    <img src={logo} alt="" className="form12_logo" />
                </a>
                <div className="form12-2">
                    <div className="container">
                        <p>
                            AppAddiction meter is a website where users view apps based on how
                            addicting they are. <br />
                            AppAddictionMeter will not quantify “addiction” but will rate apps from
                            “Not Addicting” to “Very Addicting” and then will display the overall
                            ratings. <br />
                            <br />
                            Users can either view this website out of curiosity, or to assess the
                            apps they are currently using or plan on using based on how addicting
                            they are. <br />
                            For some, they look for apps that are addicting, for others they attempt
                            to stay away from apps. AppAddictionMeter will be a tool for all of them
                            them and can be specifically useful for parents and students.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutComponent;
