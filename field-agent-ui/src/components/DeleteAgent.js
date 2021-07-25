import {useContext, useEffect, useState} from "react";
import AuthContext from "../AuthContext";
import { Link, useHistory, useParams } from 'react-router-dom';

function DeleteAgent() {

    const auth = useContext(AuthContext);
    const [agents, setAgents] = useState([]);
    const { id } = useParams();
    const history = useHistory();

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

    const agentDeleteClickHandler = (agentId) => {

        const init = {
            method: 'DELETE', // GET by default
            headers: {
                'Authorization': `Bearer ${auth.user.token}`
            }
        };

        fetch(`http://localhost:8080/api/agents/${agentId}`, init)
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
        <h2>DeleteAgent</h2>
    );
}

export default DeleteAgent;