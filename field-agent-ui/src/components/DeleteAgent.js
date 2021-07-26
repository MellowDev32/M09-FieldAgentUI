import {useContext, useEffect, useState} from "react";
import AuthContext from "../AuthContext";
import { Link, useHistory, useParams } from 'react-router-dom';

function DeleteAgent() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState('');
    const auth = useContext(AuthContext);
    const [agents, setAgents] = useState([]);
    const [toDelete, setToDelete] = useState();
    const { id } = useParams();
    const history = useHistory();

    const getAgentToDelete = (token) => {
        const init = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        fetch(`http://localhost:8080/api/agent/${id}`, init)
            // Response object
            .then(response => {
                if (response.status === 404) {
                    return Promise.reject(`Received 404 Not Found for Agent ID: ${id}`);
                }
                return response.json();
            })
            .then(data => {
                setFirstName(data.firstName);
                setMiddleName(data.middleName);
                setLastName(data.lastName);
                setDob(data.dob);
                setHeightInInches(data.heightInInches);
            })
            .catch(error => {
                console.log(error);
            });
    }

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
        getAgentToDelete(auth.user.token);
    }, [auth.user.token]);

    const agentDeleteClickHandler = (agentId) => {

        const init = {
            method: 'DELETE', // GET by default
            headers: {
                'Authorization': `Bearer ${auth.user.token}`
            }
        };

        fetch(`http://localhost:8080/api/agent/${agentId}`, init)
            .then(response => {
                if (response.status === 204) {
                    getAgents(auth.user.token);
                } else if (response.status === 404) {
                    Promise.reject(`Agent ID ${agentId} not found`);
                } else {
                    Promise.reject('Something unexpected went wrong :)');
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="delete-section">
            <h2 className="center-headline">Delete Agent</h2>
            <div className="cards">
                <div>
                    <h3>{firstName} {middleName} {lastName}</h3>
                    <ul>
                        <li><span>DOB:</span> {dob}</li>
                        <li><span>Height in Inches:</span> {heightInInches}</li>
                    </ul>
                </div>
            </div>
            <p>Are you sure you want to delete this agent?</p>
            <button onClick={() => agentDeleteClickHandler(id)}>Delete</button>
            <Link to="/agent" className="btn btn-warning ml-2">
                <i className="bi bi-x"></i> Cancel
            </Link>
        </div>
    );
}

export default DeleteAgent;