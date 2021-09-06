import React from "react";
import Results from "./Results";
import LoadingScreen from "./LoadingScreen"

export default class ResultsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            results: null,
        };
    }

    async componentDidMount() {
        // Fetch the predictions from the api

        const url = `https://covidmlapi.absarsy17.repl.co/${this.props.answers}`;
        const response = await fetch(url);
        const data = await response.json();

        // Once the data has been fetched set loading to false and set results to a Results component containing the predictions
        this.setState({
            loading: false,
            results: (
                <Results
                    Perceptron={data.Perceptron}
                    SVM={data.SVM}
                    NeuralNetwork={data.NeuralNetwork}
                />
            ),
        });
    }

    render() {
        return (
            // If the this.state.loading is true render a loading screen otherwise render the results
			<div>
            	{this.state.loading ? <LoadingScreen /> : this.state.results}
			</div>
        );
    }
}