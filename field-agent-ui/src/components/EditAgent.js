import { useContext, useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import AuthContext from '../AuthContext';
import Errors from './Errors';

function EditAgent() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState('');
    const [errors, setErrors] = useState([]);

    const auth = useContext(AuthContext);

    const { id } = useParams();
    const history = useHistory();

    const firstNameOnChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const middleNameOnChangeHandler = (event) => {
        setMiddleName(event.target.value);
    };

    const lastNameOnChangeHandler = (event) => {
        setLastName(event.target.value);
    };

    const dobOnChangeHandler = (event) => {
        setDob(event.target.value);
    };

    const heightOnChangeHandler = (event) => {
        setHeightInInches(event.target.value);
    };

    useEffect(() => {
        // GET http://localhost:8080/api/agents/1 HTTP/1.1

        const init = {
            headers: {
                'Authorization': `Bearer ${auth.user.token}`
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
    }, [id, auth.user.token]); // empty array... run once when the component is loading

    const editAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const updatedAgent = {
            agentId: id,
            firstName,
            middleName,
            lastName,
            dob,
            heightInInches
        };

        const init = {
            method: 'PUT', // GET by default
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user.token}`
            },
            body: JSON.stringify(updatedAgent)
        };

        fetch(`http://localhost:8080/api/agent/${updatedAgent.agentId}`, init)
            .then(response => {
                if (response.status === 204) {
                    return null;
                } else if (response.status === 400) {
                    return response.json();
                }
                return Promise.reject('Something unexpected went wrong :)');
            })
            .then(data => {
                if (!data) {
                    // redirect the user back to the /todos route
                    history.push('/agent');
                } else {
                    // we have errors to display
                    setErrors(data);
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <h2 className="my-4">Edit Agent</h2>
            <Errors errors={errors} />
            <form onSubmit={editAgentFormSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input className="form-control" type="text" id="firstName" name="firstName"
                           value={firstName} onChange={firstNameOnChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="middleName">Middle Name: </label>
                    <input className="form-control" type="text" id="middleName" name="middleName"
                           value={middleName} onChange={middleNameOnChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input className="form-control" type="text" id="lastName" name="lastName"
                           value={lastName} onChange={lastNameOnChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">DOB: </label>
                    <input className="form-control" type="text" id="dob" name="dob"
                           value={dob} onChange={dobOnChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="heightInInches">Height In Inches: </label>
                    <input className="form-control" type="text" id="heightInInches" name="heightInInches"
                           value={heightInInches} onChange={heightOnChangeHandler} />
                </div>
                <div className="mt-5">
                    <button className="btn btn-success" type="submit">
                        <i className="bi bi-save"></i> Update Agent</button>
                    <Link to="/agent" className="btn btn-warning ml-2">
                        <i className="bi bi-x"></i> Cancel
                    </Link>
                </div>
            </form>
        </>
    );
}

export default EditAgent;