import { Route, Switch } from "react-router-dom";
import "./App.css"
import Intro from "../Intro/Intro";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter"
import Question from "../Question/Question";
import Questions from "../data/Questions";

const App = () => {

    return (
        <>
            <Switch>
                <Route path="/vraag/:number" component={QuestionsRouter}></Route>
                <Route path="/" component={Intro}></Route>
            </Switch>
        </>
    );
}

export default App;