import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="d-flex align-center space-between pd-16">
            <div className="d-flex align-center gap-sm header pd-8">
                <img className="logo-img" src="https://play-lh.googleusercontent.com/36szRvmqeewn6fxpx9V88zhpPU3c84Im9zjAFPZl-cReiztnAD6cn0jSnWBGsNNdPsU" alt="logo"/>
                <h1 className="h1">GFG Notes</h1>
            </div>
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
        </header>
    )
}