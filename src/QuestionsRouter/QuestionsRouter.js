import React from "react";
import Question from "../Question/Question";
import { withRouter } from "react-router-dom";
import Questions from "../data/Questions";


class QuestionsRouter extends React.Component{
    constructor(props){
        super(props);        
        this.myNumber = this.props.match.params.number;
        this.state = {Questions: []}
    }

    componentDidMount(){
        this.setState({ Questions: Questions });
    }

    onRate = (rating, number) => {
        let oldState = this.state.Questions;
        let newState = oldState.map( question => {
            if(question.number === number ){
                question.rating = rating;
                return question;
            }
            return question
        });
        this.setState({question: newState});
    }

    render(){
        this.myNumber = this.props.match.params.number;
        let questionsToBeRendered = this.state.Questions.map(QuestionObject => {
            if(this.myNumber == QuestionObject.number){
                return <Question onLast={() => this.props.onLast(this.state.Questions)} last={QuestionObject.last} onRate={this.onRate} next={QuestionObject.next} previous={QuestionObject.previous} key={QuestionObject.number} number={QuestionObject.number} rating={QuestionObject.rating} question={QuestionObject.question} />
            }
            return null;
        })
        return(
            <>
                {questionsToBeRendered}
            </>
        ) 
    }
}

export default withRouter(QuestionsRouter);

