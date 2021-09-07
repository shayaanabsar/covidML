import React from "react";
import NegativeTest from "./NegativeTest.png";
import PositiveTest from "./PositiveTest.png";

export default class ResultsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numPos:
                this.props.Perceptron +
                this.props.SVM +
                this.props.NeuralNetwork, // The number of the models that indicate the person would test positive
        };
    }

    render() {
        let message;
        let image;

        // Set image and message depending on how many models predict the person would test positive

        if (this.state.numPos / 3 > 0.5) {
            message =
                "This indicates that it is likely you would test positive for COVID-19.";

            image = (
                <img
                    src={PositiveTest}
                    height="300"
                    width="350"
                    alt="COVID Test"
                />
            );
        } else {
            message =
                "This indicates that it is unlikely you would test positive for COVID-19.";

            image = (
                <img
                    src={NegativeTest}
                    height="300"
                    width="350"
                    alt="COVID Test"
                />
            );
        }

        return (
            <div className="results">
                {image}

                <h1>
                    {this.state.numPos} of our models predict that you would
                    test positive for COVID-19.
                </h1>
                <p>{message}</p>
                <p>
                    <strong>
                        covidML uses the following machine learning models:
                    </strong>
                </p>

                <p>
                    <a
                        href="https://en.wikipedia.org/wiki/Perceptron"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        A Perceptron Model
                    </a>
                </p>
                <p>
                    <a
                        href="https://en.wikipedia.org/wiki/Support-vector_machine"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        A Support Vector Machine
                    </a>
                </p>
                <p>
                    <a
                        href="https://en.wikipedia.org/wiki/Multilayer_perceptron"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        A Multilayer Perceptron Model
                    </a>{" "}
                    (a type of{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Artificial_neural_network"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Artificial Neural Neural Network
                    </a>
                    )
                </p>
            </div>
        );
    }
}