import React, { Component } from "react";
import airpordstore from "../images/airpordstore.png";

class AdGroup extends Component {
    render() {
        const { item_list } = this.props;
        return (
            <section className="wrapper">
                <div className="main-container main-containter-transparent">
                    <div className="columns w-row">
                        {item_list.map((item, i) => {
                            var class_string = "column-1 w-col w-col-3";
                            if (i === 3) class_string = class_string + " column2";

                            var image_url = item.image;
                            if (image_url === "airpordstore") {
                                image_url = airpordstore;
                            }
                            return (
                                <div key={i} className={class_string}>
                                    <a
                                        href={item.link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="blog-item w-inline-block"
                                    >
                                        <div
                                            className="blog-header-img"
                                            style={{
                                                backgroundImage: `url('${image_url}')`,
                                            }}
                                        ></div>
                                        <div className="div-block-4">
                                            <h1 className="category-heading">
                                                {item.category_heading}
                                            </h1>
                                            <h1 className="heading-4">{item.main_heading}</h1>
                                            <p className="descrip">
                                                {item.description}
                                                <br />
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default AdGroup;
