import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import submit_logo from "../images/submit_logo.png";

//Google Analytics to Submit page
import ReactGA from "react-ga";

ReactGA.initialize("UA-154738585-1");

class SubmitComponent extends Component {
    state = {
        data: null,
        name: "",
        email: "",
        app_name: "",
        app_url: "",
        rating: "",
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch("/api/send");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };
    changeRating = (newRating, name) => {
        this.setState({
            rating: newRating,
        });
    };
    handleChange = evt => {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value,
        });
    };
    handleSubmit = async event => {
        event.preventDefault();
        const { name, email, app_name, app_url, rating } = this.state;
        const output =
            "Your name: " +
            name +
            "\nYour Email: " +
            email +
            "\nApp Name: " +
            app_name +
            "\nApp Store Url:" +
            app_url +
            "\nRating:" +
            rating;
        console.log(output);

        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "appaddictionmeter@website.com",
                to: "XueQingQu@yandex.com",
                subject: "App Submit",
                text: output,
            }),
        });
        const body = await response.text();
        console.log(body);
    };
    render() {
        console.log("submit page");
        ReactGA.set({ page: "/submit_page" });
        ReactGA.pageview("/submit_page");
        const { name, email, app_name, app_url, rating } = this.state;
        return (
            <Fragment>
                <div className="module_wrap-4 contact_form main_contact">
                    <Link to={"/"} className="link-block w-inline-block">
                        <img src={submit_logo} alt="" className="form12_logo" />
                    </Link>
                    <div className="form12-2">
                        <div className="form12_block-2 contact_form less_space w-form">
                            <form
                                id="wf-form-Website-Build-Form"
                                name="wf-form-Website-Build-Form"
                                data-name="Website Build Form"
                                className="form12_form"
                                onSubmit={this.handleSubmit}
                            >
                                <div className="form12_field_wrap-2">
                                    <input
                                        type="text"
                                        className="form-input form-input-large w-input"
                                        maxLength="256"
                                        name="name"
                                        data-name="Name"
                                        placeholder="Your Name"
                                        id="Name"
                                        required={true}
                                        value={name}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="email"
                                        className="form-input form-input-large w-input"
                                        maxLength="256"
                                        name="email"
                                        data-name="Email"
                                        placeholder="Your Email"
                                        id="Email"
                                        required={true}
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="text"
                                        className="form-input form-input-large w-input"
                                        maxLength="256"
                                        name="app_name"
                                        data-name="App Name"
                                        placeholder="App Name"
                                        id="App-Name"
                                        required={true}
                                        value={app_name}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="text"
                                        className="form-input form-input-large w-input"
                                        maxLength="256"
                                        name="app_url"
                                        data-name="App Website"
                                        placeholder="App Store URL"
                                        id="App-Website"
                                        required={true}
                                        value={app_url}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="number"
                                        className="form-input form-input-large w-input"
                                        maxLength="256"
                                        name="rating"
                                        data-name="App Website"
                                        placeholder="App Addiction Rating (1-10)"
                                        id="App-Rating"
                                        required={true}
                                        value={rating}
                                        min="1"
                                        max="10"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form12_button_wrap-2">
                                    <input
                                        type="submit"
                                        value="SUBMIT APP"
                                        data-wait="sending..."
                                        className="btn w-button"
                                    />
                                </div>
                            </form>
                            <div className="f02_success_message w-form-done">
                                <div className="form_alert">
                                    <div className="form_alert_wrap">
                                        <img
                                            src="https://uploads-ssl.webflow.com/5d94cb514cde5d4f5a6593ba/5d94cb514cde5d9d356595af_check-white.svg"
                                            width="14"
                                            alt=""
                                            className="form_alert_icon"
                                        />
                                        <div className="form_alert_line"></div>
                                        <div className="form_alert_text white-text">Success!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="error-message-4 w-form-fail">
                                <div className="form_error">
                                    <div className="form_error_wrap">
                                        <img
                                            src="https://uploads-ssl.webflow.com/5d94cb514cde5d4f5a6593ba/5d94cb514cde5d45a56595ae_alert-circle-white.svg"
                                            width="16"
                                            alt=""
                                            className="form_error_icon"
                                        />
                                        <div className="form_error_line"></div>
                                        <div className="form_error_paragraph white-text">
                                            Looks like we're having trouble
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="container-copy"
                            style={{
                                width: "95%",
                                marginTop: "200px",
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
            </Fragment>
        );
    }
}

export default SubmitComponent;
