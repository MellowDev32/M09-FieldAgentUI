import logo from '../images/field-agent-logo.png';
import { Link } from 'react-router-dom';
import AuthContext from "../AuthContext";
import {useContext} from "react";

function Header() {
    const auth = useContext(AuthContext);
    return (
        <div className="header-border">
            <header>
                <div className="header-left">
                    <h1>Field Agent</h1>
                    <Link to={`/`} className="btn"><img src={logo} alt="field agent logo" /></Link>
                </div>

                <div className="header-middle">
                    <h2>Field Agent</h2>
                    <p>A Super Secret List of Super Secret Spies</p>
                </div>

                <div className="header-right">
                    {!auth.user && (
                        <ul>
                            <Link to={`/login`} className="btn">Login</Link>
                            <Link to={`/register`} className="btn">Register</Link>
                        </ul>
                    )}
                    {auth.user && (
                        <div>
                            <p>Hello {auth.user.username}! &nbsp;
                            <button onClick={() => auth.logout()} className="btn btn-primary">Logout</button>
                            </p>
                        </div>
                    )}
                </div>

            </header>

            <nav>
                <ul>
                    <Link to={`/`} className="btn">Home</Link>
                    <Link to={`/agent`} className="btn">Agents</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;