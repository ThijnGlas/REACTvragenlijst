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

    render(){
        let questionsToBeRendered = this.state.Questions.map(QuestionObject => {
            if(this.myNumber == QuestionObject.number){
                return <Question key={QuestionObject.number} number={QuestionObject.number} rating={QuestionObject.rating} question={QuestionObject.question} />
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

