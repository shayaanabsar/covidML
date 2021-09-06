import React from "react";
import Question from "./Question";

export default class Survey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [
                "Are you having breathing problems?",
                "Do you have a fever?",
                "Do you have a dry cough?",
                "Do you have a sore throat?",
                "Do you have a runny nose?",
                "Do you have Asthma?",
                "Do you have Chronic Lung Disease?",
                "Do you have a headache?",
                "Do you have Heart Disease?",
                "Do you have Diabetes?",
                "Do you have High Blood Pressure?",
                "Do you feel fatigued?",
                "Do you having Gastrointestinal problems such as nausea, abdominal pain, diarrhea or constipation?",
                "Have you travelled abroad recently?",
                "Have you recently had contact with someone who tested positive for COVID-19?",
                "Have you recently attended a large gathering?",
                "Have you recently visited public exposed places?",
                "Do you and the people you live with work in public exposed places?",
                "Do you regularly wear a mask?",
                "Do you regularly use hand sanitizer?",
            ],

            answers: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            ], // null indicates unanswered, 1 indicates yes, 0 indicates no

            submitDisabled: true,
        };
    }

    render() {
        const questionElements = this.state.questions.map((question, count) => (
            <Question
                key={count}
                question={question}
                count={count}
                updateAnswers={this.updateAnswers}
            />
        ));

        return (
            <div>
                <h1>Answer the Following Questions</h1>
                <div className="survey">
                    {questionElements}
                    <button
                        id="getResultsButton"
                        className="btn btn-outline-light"
                        disabled={this.state.submitDisabled}
                        onClick={this.submitAnswers}
                    >
                        Get Results
                    </button>
                </div>
            </div>
        );
    }

    updateAnswers = (event) => {
        let newAnswers = [...this.state.answers]; // Make a copy of this.state.answers

        newAnswers[parseInt(event.target.name)] = parseInt(event.target.value); // Change the value in newAnswers to the new answer

        this.setState(
            {
                answers: newAnswers,
            },
            this.checkAnswers
        ); // Set this.state.answers to newAnswers and call the checkAnswers function to see if all questions have been answered
    };

    checkAnswers = () => {
        for (const answer of this.state.answers) {
            if (answer === null) {
                // If an item in this.state.answers is null (meaning it hasn't been answered) exit the function
                return;
            }
        }
        // If none of the items in this.state.answers are null (meaning all questions have been answered) set this.state.submitDisabled to false which will allow the submit button to be pressed
        this.setState({
            submitDisabled: false,
        });
    };

    submitAnswers = (event) => {
        // When submit is pressed, store the answers in this.state.answers of the App component and change the page

        this.props.storeAnswers(this.state.answers);
        this.props.changePage();
    };
}