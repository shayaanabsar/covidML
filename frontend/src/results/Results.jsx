import React from "react";
import CovidTestImage from "./CovidTestImage.png";

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

        if (this.state.numPos / 3 > 0.5) {
            // If more than half of the models indicate a positive test
            message =
                "This indicates that it is likely you would test positive for COVID-19.";
        } else {
            message =
                "This indicates that it is unlikely you would test positive for COVID-19.";
        }

        return (
            <div className="results">
                <img
                    src={CovidTestImage}
                    height="300"
                    width="317"
                    alt="COVID Test"
                />
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