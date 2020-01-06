import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import submit_logo from "../images/submit_logo.png";
import plus_icon from "../images/plus_icon.png";
import question_icon from "../images/question_icon.png";

let menu_item_list = [
    "Most Addicting",
    "Social Networking",
    "Games & Entertainment",
    "News & Sports",
    "Kids",
    "Shopping",
    "Lifestyle & Health",
    "Other",
];

class HeaderComponent extends Component {
    state = {
        show_menu: false,
    };
    handleClick = () => {
        const { show_menu } = this.state;
        this.setState({
            show_menu: !show_menu,
        });
    };
    clickItem = key => {
        this.setState({
            show_menu: false,
        });
        this.props.clickItem(key);
    };
    render() {
        const { show_menu } = this.state;
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
                        <Link to={"/submit"} className="link-block w-inline-block">
                            <img src={plus_icon} width="30" alt="" className="round_image" />
                        </Link>
                        <a className="link-block w-inline-block">
                            <img src={submit_logo} height="80" alt="" onClick={this.handleClick} />
                        </a>
                        <Link to={"/about"} className="link-block w-inline-block">
                            <img src={question_icon} width="30" alt="" className="round_image" />
                        </Link>
                    </main>
                    <ul className={`menu ${show_menu ? "" : "hidden"}`}>
                        {menu_item_list.map((item, key) => (
                            <li
                                key={key}
                                className="menu_item"
                                data-id={key}
                                onClick={this.clickItem.bind(this, key)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
                <div
                    data-collapse="none"
                    data-animation="default"
                    data-duration="400"
                    className="logo-wrapper w-nav"
                >
                    <div className="w-nav-overlay" data-wf-ignore=""></div>
                </div>
            </Fragment>
        );
    }
}

export default HeaderComponent;
