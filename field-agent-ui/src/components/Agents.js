import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext';
import {Container} from "react-bootstrap";

function Agents() {
    const [agents, setAgents] = useState([]);

    const auth = useContext(AuthContext);

    const getAgents = (token) => {
        /*
        GET http://localhost:8080/api/agents HTTP/1.1
        Authorization: Bearer {{token}}
        */

        const init = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        // loading initial data for our component
        fetch('http://localhost:8080/api/agent', init)
            .then(response => response.json())
            .then(data => setAgents(data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getAgents(auth.user.token);
    }, [auth.user.token]);



    return (
        <div class="container">
            <main>
                <h2>Agents</h2>

                <Link to={`/agent/add`} className="btn btn-success btn-sm">
                    <i className="bi bi-plus"></i> Add Agent
                </Link>

                <div className="cards">
                    {agents.map(agent => (
                        <div className="row">
                            <div className="col card" key={agent.agentId}>
                                <h3>{agent.firstName} {agent.middleName} {agent.lastName}</h3>
                                <ul>
                                    <li><span>DOB: </span>{agent.dob}</li>
                                    <li><span>Height in Inches: </span>{agent.heightInInches}</li>
                                </ul>
                                <div>
                                    <Link to={`/agent/edit/${agent.agentId}`} className="btn btn-primary btn-sm">
                                        <i className="bi bi-pencil"></i> Edit
                                    </Link>
                                    <Link to={`/agent/delete/${agent.agentId}`} className="btn btn-danger btn-sm">
                                        <i className="bi bi-trash"></i> Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>

    );
}

export default Agents;