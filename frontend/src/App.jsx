import React from "react";
import Home from "./homepage/Home";
import Survey from "./survey/Survey";
import ResultsPage from "./results/ResultsPage";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: "Home",
            answers: [],
        };
    }

    render() {
        var page;

        switch (this.state.page) {
            // Set page to the correct React Component
            case "Survey":
                page = (
                    <Survey
                        changePage={this.changePage}
                        storeAnswers={this.storeAnswers}
                    />
                );
                break;
            case "Results":
                page = <ResultsPage answers={this.state.answers} />;
                break;
            default:
                page = <Home changePage={this.changePage} />;
        }

        return (
            // Render the page

            <div>{page}</div>
        );
    }

    changePage = () => {
        // Function used to change the page

        var newPage;

        switch (this.state.page) {
            case "Home":
                newPage = "Survey";
                break;
            case "Survey":
                newPage = "Results";
                break;
            default:
                newPage = "Home";
        }

        this.setState({
            page: newPage,
        });
    };

    storeAnswers = (userAnswers) => {
        this.setState({
            answers: userAnswers,
        });
    };
}

