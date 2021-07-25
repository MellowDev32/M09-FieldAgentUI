import {useContext} from "react";
import AuthContext from "../AuthContext";
import { Link, useHistory, useParams } from 'react-router-dom';

function DeleteAgent() {

    const auth = useContext(AuthContext);

    const { id } = useParams();
    const history = useHistory();

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