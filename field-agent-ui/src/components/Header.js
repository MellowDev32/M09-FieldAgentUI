import logo from '../images/field-agent-logo.png';

function Header() {
    return (
        <div>
            <header>

                <div className="header-left">
                    <h1>Field Agent</h1>
                    <a href="home.html"><img src={logo} alt="field agent logo" /></a>
                </div>

                <div className="header-middle">
                    <h2>Field Agent</h2>
                    <p>A Super Secret List of Super Secret Spies</p>
                </div>

                <div className="header-right">
                    <ul>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                    </ul>
                </div>

            </header>

            <nav>
                <ul>
                    <li><a href="agents.html">Agents</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;