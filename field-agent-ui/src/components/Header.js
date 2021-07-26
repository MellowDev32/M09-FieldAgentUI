import logo from '../images/field-agent-logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>

                <div className="header-left">
                    <h1>Field Agent</h1>
                    <img src={logo} alt="field agent logo" />
                </div>

                <div className="header-middle">
                    <h2>Field Agent</h2>
                    <p>A Super Secret List of Super Secret Spies</p>
                </div>

                <div className="header-right">
                    <ul>
                        <Link to={`/login`} className="btn">Login</Link>
                        <Link to={`/register`} className="btn">Register</Link>
                    </ul>
                </div>

            </header>

            <nav>
                <ul>
                    <Link to={`/agent`} className="btn">Agents</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;