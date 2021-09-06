import React from "react";

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: null,
        };
    }

    render() {
        let currentAnswer;

        switch (this.state.answer) {
            // Set current answer to a comment stating what the current answer is or a comment saying the question hasn't been answered yet
            // 1 indicates yes, 0 no and null indicates not answered

            case 1:
                currentAnswer = <p>Current Answer: Yes</p>;
                break;
            case 0:
                currentAnswer = <p>Current Answer: No</p>;
                break;
            default:
                currentAnswer = <p className="red">Not Yet Answered</p>;
        }

        return (
            <div className="question">
                <p>
                    {this.props.count + 1}. {this.props.question}
                </p>
                <button
                    type="button"
                    value="1"
                    className="btn btn-outline-success"
                    name={this.props.count}
                    onClick={this.updateAnswer}
                >
                    Yes
                </button>
                <button
                    type="button"
                    value="0"
                    className="btn btn-outline-danger"
                    name={this.props.count}
                    onClick={this.updateAnswer}
                >
                    No
                </button>
                {currentAnswer}
            </div>
        );
    }

    updateAnswer = (event) => {
        this.setState(
            {
                answer: parseInt(event.target.value),
            },
            this.props.updateAnswers(event)
        ); // Update this.state.answer in this component then update this.state.answers in the Survey component
    };
}
