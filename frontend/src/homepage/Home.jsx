import React from "react";
import homepageImage from "./homepageImage.gif";

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <img
                    src={homepageImage}
                    height="300"
                    width="358"
                    alt="Homepage Gif"
                />
                <h1>Welcome to covidML</h1>
                <p>
                    covidML uses a series of machine learning models to predict
                    whether or not you have COVID-19
                </p>
                <p>
                    <strong>
                        You should not use the covidML as a medical indicator
                        and should still get tested and follow your region's
                        guidelines
                    </strong>
                </p>
                <button
                    className="btn btn-outline-light"
                    onClick={this.props.changePage}
                >
                    Click Here to Take the Survey
                </button>
            </div>
        );
    }
}
