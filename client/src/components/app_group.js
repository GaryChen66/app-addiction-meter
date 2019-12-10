import React, { Component } from "react";
import rating1 from "../images/rating1.png";
import rating2 from "../images/rating2.png";
import rating3 from "../images/rating3.png";
import rating4 from "../images/rating4.png";
import rating5 from "../images/rating5.png";
import rating6 from "../images/rating6.png";
import rating7 from "../images/rating7.png";
import rating8 from "../images/rating8.png";
import rating9 from "../images/rating9.png";
import rating10 from "../images/rating10.png";
var rating_arr = [
    rating1,
    rating2,
    rating3,
    rating4,
    rating5,
    rating6,
    rating7,
    rating8,
    rating9,
    rating10,
];

class AppGroup extends Component {
    render() {
        const { category_heading, main_heading, item_list } = this.props;
        return (
            <div>
                <section className="wrapper">
                    <main className="main-container">
                        <h1 className="category-heading">{category_heading}</h1>
                        <h1 className="heading-2">{main_heading}</h1>
                        <div className="w-dyn-list">
                            <div className="collection-list-2 w-dyn-items">
                                {item_list.map((item, i) => (
                                    <div key={i} className="collection-item-2 w-dyn-item">
                                        <a href={item.link} className="link-item w-inline-block">
                                            <div className="icon-wrapper">
                                                <div
                                                    style={{
                                                        backgroundImage: `url('${item.image}')`,
                                                    }}
                                                    className="icon"
                                                ></div>
                                            </div>
                                            <div className="app-info">
                                                <h1 className="app-name">{item.app_name}</h1>
                                                <h2 className="app-descrip">
                                                    {item.app_description}
                                                </h2>
                                            </div>
                                            <div className="get-wrapper">
                                                <img
                                                    src={rating_arr[item.rating - 1]}
                                                    width="70"
                                                    alt="Get"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        );
    }
}

export default AppGroup;
