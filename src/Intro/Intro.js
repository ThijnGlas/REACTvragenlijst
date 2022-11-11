import { Link } from "react-router-dom";
import "./Intro.css"

const Intro = () =>{
    return(
        <article className="intro">
        <Link className="intro__button" to={"/vraag/1"}>Start</Link>
        </article>
    )
}

export default Intro;