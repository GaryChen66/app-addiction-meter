import React, { Component } from "react";
import { Link } from "react-router-dom";
import submit_logo from "../images/submit_logo.png";

import meter_icon from "../images/meterKEY.png";

//Google Analytics to about page
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
                            <Link
                                to={"/"}
                                style={{
                                    fontStyle: "italic",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    color: "blue",
                                }}
                            >
                                AppAddictionMeter.com
                            </Link>
                            &nbsp;is a not-for-profit website bringing awareness to the vast
                            increase in smartphone addiction by offering users a new way to rate and
                            review mobile apps.
                            <hr />
                            As this issue becomes more prevalent, consider assessing the apps you
                            are currently using, or plan on using, based on how “addicting” they are
                            according to other smartphone users.
                            <hr />
                            This site can be a tool for any user, of any age, but aims to be
                            particularly useful for millennials and Generation Z.
                            <hr />
                            <Link
                                to={"/"}
                                style={{
                                    fontStyle: "italic",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    color: "blue",
                                }}
                            >
                                AppAddictionMeter.com
                            </Link>
                            &nbsp;uses the following rating system:
                            <hr />
                            <img
                                src={meter_icon}
                                style={{
                                    marginLeft: "calc(50% - 160px)",
                                }}
                            ></img>
                            <hr />
                            For more information or to advertise with us please contact:
                            <hr />
                            <a
                                href="mailto:info@appaddictionmeter.com"
                                style={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    fontWeight: "bold",
                                }}
                            >
                                info@appaddictionmeter.com
                            </a>
                        </div>
                    </div>
                    <div
                        className="container-copy"
                        style={{
                            width: "90%",
                            marginTop: "150px",
                        }}
                    >
                        <a
                            href="https://twitter.com/howaddicting"
                            className="link-block social-link"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQpmnIMCFwAiFpIln_uEw0taBHSBz45vf__P0j5yEqtBeEhWyD"
                                width="35"
                                alt=""
                                className="image-5"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/appaddictionmeter/"
                            className="link-block social-link"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5hYTiTb4eTGeXv1YKPDnxc_k6FJg87jC-iBaGo9UyPln2FyFW"
                                width="37"
                                alt=""
                                className="image-5"
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutComponent;
