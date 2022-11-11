import React from "react";
import "./Question.css"
import {withRouter} from "react-router"

class Question extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rating: 0,
        }
    }

    componentDidMount(){
        this.setState({
        rating: this.props.rating
    })
    }

    onStarClicked = (rating) => {
        this.setState({
            rating: rating,
        })
    }

    render(){
        let starsArray = [];
        for(let i = 1; i <= this.state.rating;  i++){
            starsArray.push(<i onClick={() => this.onStarClicked(i)} className="question__star fa-solid fa-star"></i>)
        }

        for(let i = this.state.rating +1; i <= 5; i++){
            starsArray.push(<i onClick={() => this.onStarClicked(i)} className="question__star fa-regular fa-star"></i>)
        }

        return (
            <article className="question">
                <header className="question__header">
                    <h2 className="question__heading"># {this.props.number} {this.props.question}</h2>
                </header>
                <section className="question__section">
                    <p className="question__text">(1 ster staat voor zeer slecht, 5 sterren staan voor zeer goed)</p>
                    <div className="question__stars">
                        {starsArray}
                    </div>
                </section>
                <footer className="question__footer">
                    <button className="question__button">Vorige</button>
                    <button className="question__button">Volgende</button>
                </footer>
            </article>
        );
    }
}

export default withRouter(Question);
