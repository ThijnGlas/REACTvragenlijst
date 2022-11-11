import { Route, Switch } from "react-router-dom";
import "./App.css"
import Intro from "../Intro/Intro";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter"
import Outro from "../Outro/Outro";
import React from "react";


class App extends React.Component {

    constructor(){
        super();
        this.state={questionsAndAnswers: []};
    }



    onLast = (newQuestionsAndAnswers) => {
        this.setState({questionsAndAnswers: newQuestionsAndAnswers});
    }

    render(){
        return (
            <>
                <Switch>
                    <Route path="/vraag/:number">
                        <QuestionsRouter onLast={this.onLast}/>
                    </Route>
                    <Route path="/outro">
                        <Outro questionsAndAnswers={this.state.questionsAndAnswers}></Outro>
                    </Route>
                    <Route path="/" component={Intro}></Route>
    
                </Switch>
            </>
        );
    }
    
}

export default App;