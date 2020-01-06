import React, { Fragment, Component } from "react";

import AppGroup from "./app_group.js";
import AdGroup from "./ad_group.js";

import ReactGA from "react-ga";
import data from "../data";
import HeaderComponent from "./header_component.js";

//Google analytics to Home page
ReactGA.initialize("UA-154738585-1");

//Load Json data
const {
    first_app_group,
    second_app_group,
    third_app_group,
    fourth_app_group,
    fifth_app_group,
    sixth_app_group,
    seventh_app_group,
    eighth_app_group,
    first_advertise,
    second_advertise,
    third_advertise,
} = data;

//Create Ref for component
const ref_arr = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
];
//Home component
class HomeComponent extends Component {
    clickItem = key => {
        //window.scrollTo(0, ref_arr[key].current.offsetTop+100);
        window.scrollTo({
            top: ref_arr[key].current.offsetTop - 100,
            left: 0,
            behavior: "smooth",
        });
    };
    render() {
        console.log("home page");
        ReactGA.set({ page: "/home_page" });
        ReactGA.pageview("/home_page");
        return (
            <Fragment>
                <HeaderComponent clickItem={this.clickItem}></HeaderComponent>

                <AppGroup {...first_app_group} pos_ref={ref_arr[0]} />
                <AppGroup {...second_app_group} pos_ref={ref_arr[1]} />
                <AdGroup item_list={first_advertise} />
                <AppGroup {...third_app_group} pos_ref={ref_arr[2]} />
                <AppGroup {...fourth_app_group} pos_ref={ref_arr[3]} />
                <AdGroup item_list={second_advertise} />
                <AppGroup {...fifth_app_group} pos_ref={ref_arr[4]} />
                <AppGroup {...sixth_app_group} pos_ref={ref_arr[5]} />
                <AdGroup item_list={third_advertise} />
                <AppGroup {...seventh_app_group} pos_ref={ref_arr[6]} />
                <AppGroup {...eighth_app_group} pos_ref={ref_arr[7]} />

                <footer className="wrapper">
                    <div className="container-copy">
                        <a
                            href="https://twitter.com/howaddicting"
                            className="link-block social-link w-inline-block"
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
                            className="link-block social-link w-inline-block"
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
