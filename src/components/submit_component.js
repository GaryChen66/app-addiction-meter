import React, { Component } from "react";
import submit_logo from "../images/submit_logo.png";

var nodemailer = require("nodemailer");

async function sendMail(mailOptions) {
    var smtpTransport = nodemailer.createTransport({
        service: "SendGrid",
        secure: false,
        auth: {
            user: "DamirOstojic",
            pass: "123qwe!@#",
        },
    });
    var result = await new Promise(resolve => {
        console.log(smtpTransport);
        smtpTransport.sendMail(mailOptions, function(error) {
            if (error) {
                console.log("email send error", error);
            }
            resolve({ error });
        });
    });
    return result;
}
class SubmitComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            app_name: "",
            app_url: "",
            rating: "",
        };
    }
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
    handleSubmit = event => {
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
        var message_content = {
            from: "appaddictionmeter@website.com",
            to: "devjesus25@gmail.com",
            subject: "App Submit",
            text: "ouput",
        };
        sendMail(message_content);
    };
    render() {
        const { name, email, app_name, app_url, rating } = this.state;
        return (
            <div className="module_wrap-4 contact_form main_contact">
                <a href="/" className="link-block w-inline-block">
                    <img src={submit_logo} alt="" className="form12_logo" />
                </a>
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
                </div>
            </div>
        );
    }
}

export default SubmitComponent;
