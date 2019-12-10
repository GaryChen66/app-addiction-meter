import React, { Fragment, Component } from "react";

import AppGroup from "../components/app_group.js";
import AdGroup from "../components/ad_group.js";

import main_logo from "../images/main_logo.png";
import plus_icon from "../images/plus_icon.png";
import question_icon from "../images/question_icon.png";

import data from "../data";

const {
    first_app_group,
    second_app_group,
    third_app_group,
    fourth_app_group,
    fifth_app_group,
    first_advertise,
    second_advertise,
} = data;

class HomeComponent extends Component {
    render() {
        return (
            <Fragment>
                <div
                    data-collapse="none"
                    data-animation="default"
                    data-duration="400"
                    className="logo-wrapper w-nav"
                >
                    <div className="w-nav-overlay" data-wf-ignore=""></div>
                </div>

                <section className="main-wrapper">
                    <main className="container top-container">
                        <a href="/submit" className="link-block w-inline-block">
                            <img src={plus_icon} width="40" alt="" className="round_image" />
                        </a>
                        <a href="/" className="link-block w-inline-block">
                            <img src={main_logo} width="300" alt="" />
                        </a>
                        <a href="/about" className="link-block w-inline-block">
                            <img src={question_icon} width="40" alt="" className="round_image" />
                        </a>
                    </main>
                </section>
                <div
                    data-collapse="none"
                    data-animation="default"
                    data-duration="400"
                    className="logo-wrapper w-nav"
                >
                    <div className="w-nav-overlay" data-wf-ignore=""></div>
                </div>

                <AppGroup {...first_app_group} />
                <AppGroup {...second_app_group} />
                <AdGroup item_list={first_advertise} />
                <AppGroup {...third_app_group} />
                <AppGroup {...fourth_app_group} />
                <AdGroup item_list={second_advertise} />
                <AppGroup {...fifth_app_group} />

                <footer className="wrapper">
                    <div className="container-copy">
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
                </footer>
            </Fragment>
        );
    }
}
export default HomeComponent;
