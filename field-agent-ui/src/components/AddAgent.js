import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthContext from '../AuthContext';
import Errors from './Errors';

function AddAgent() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState('');
    const [errors, setErrors] = useState([]);

    const auth = useContext(AuthContext);

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

    const addAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const newAgent = {
            firstName,
            middleName,
            lastName,
            dob,
            heightInInches
        };

        const init = {
            method: 'POST', // GET by default
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user.token}`
            },
            body: JSON.stringify(newAgent)
        };

        fetch('http://localhost:8080/api/agent', init)
            .then(response => {
                if (response.status === 201 || response.status === 400) {
                    return response.json();
                }
                return Promise.reject('Something unexpected went wrong :)');
            })
            .then(data => {
                // we either created the recorded...
                if (data.agentId) {
                    // redirect the user back to the /todos route
                    history.push('/agent');
                } else {
                    // we have error messages
                    setErrors(data);
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <h2 className="my-4">Add Agent</h2>
            <Errors errors={errors} />
            <form onSubmit={addAgentFormSubmitHandler}>
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
                        <i className="bi bi-plus-circle-fill"></i> Add Agent</button>
                    <Link to="/agents" className="btn btn-warning ml-2">
                        <i className="bi bi-x"></i> Cancel
                    </Link>
                </div>
            </form>
        </>
    );
}

export default AddAgent;