import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext';

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
        fetch('http://localhost:8080/api/agents', init)
            .then(response => response.json())
            .then(data => setAgents(data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getAgents(auth.user.token);
    }, [auth.user.token]);



    return (
        <div>
            <h2>Agents</h2>
            <div class="cards">
                {agents.map(agent => (
                    <div key={agent.agentId}>
                        <h3>{agent.firstName} {agent.middleName} {agent.lastName}</h3>
                        <ul>
                            <li><span>DOB: </span>{agent.dob}</li>
                            <li><span>Height in Inches: </span>{agent.heightInInches}</li>
                        </ul>
                        <div>
                            <Link to={`/agents/edit/${agent.agentId}`} className="btn btn-primary btn-sm">
                                <i className="bi bi-pencil"></i> Edit
                            </Link>
                            <Link to={`/agents/delete/${agent.agentId}`} className="btn btn-danger btn-sm">
                                <i className="bi bi-trash"></i> Delete
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Agents;