import { useState } from 'react';
import data from "../data";

function FieldAgents(){
    const [agents, setAgents] = useState(data);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState('');

    const firstNameOnChangeHandler = (event) => {
        console.log(event);
        setFirstName(event.target.value);
    }

    const middleNameOnChangeHandler = (event) => {
        console.log(event);
        setMiddleName(event.target.value);
    }

    const lastNameOnChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const dobNameOnChangeHandler = (event) => {
        setDob(event.target.value);
    }

    const heightOnChangeHandler = (event) => {
        setHeightInInches(event.target.value);
    }

    const addAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const nextId = agents.length > 0 ? Math.max(...agents.map(a => a.agentId)) + 1 : 1;

        const newAgent = {
            agentId: nextId,
            firstName,
            middleName,
            lastName,
            dob,
            heightInInches
        }

        setAgents([...agents, newAgent]);

        setFirstName('');
        setMiddleName('');
        setLastName('');
        setDob('');
        setHeightInInches('');
    }

    const AgentDeleteClickHandler = (AgentId) => {
        setAgents(agents.filter(agent => agent.agentId !== AgentId));
    }

    return (
      <div>
          <header>
              <div className="header-left">
                  <h1>Field Agent</h1>
                  <a href="#"><img src="../images/field-agent-logo.png" alt="field agent logo"/></a>
              </div>

              <div className="header-right">
                  <ul>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="register.html">Register</a></li>
                  </ul>
              </div>
          </header>

          <nav>
              <li><a href="#">Home</a></li>
              <li><a href="#">Agencies</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Agents</a></li>
              <li><a href="#">Missions</a></li>
          </nav>

          <h2>Agents</h2>

          <h3>Add Agent</h3>
          <form onSubmit={addAgentFormSubmitHandler}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={firstNameOnChangeHandler} />
                </div>
                <div>
                  <label htmlFor="middleName">Middle Name: </label>
                  <input type="text" id="middleName" name="middleName" value={middleName} onChange={middleNameOnChangeHandler} />
                </div>

                <div>
                  <label htmlFor="lastName">Last Name: </label>
                  <input type="text" id="lastName" name="lastName" value={lastName} onChange={lastNameOnChangeHandler} />
                </div>

                <div>
                  <label htmlFor="dob">Date of Birth: </label>
                  <input type="text" id="dob" name="dob" value={dob} onChange={dobNameOnChangeHandler} />
                </div>

                <div>
                    <label htmlFor="heightInInches">Height in Inches: </label>
                    <input type="text" id="heightInInches" name="heightInInches" value={heightInInches} onChange={heightOnChangeHandler} />
                </div>

                <div>
                    <button type="submit">Add Agent</button>
                </div>
          </form>

          {agents.map(agent => (

              <div className="cards">
                  <div>
                      <h3>{agent.firstName} {agent.middleName} {agent.lastName}</h3>
                      <ul>
                          <li><span>DOB:</span> {agent.dob}</li>
                          <li><span>Height in Inches:</span> {agent.heightInInches}</li>
                      </ul>
                      <div>
                          <button >Edit</button>
                          <button onClick={() => AgentDeleteClickHandler(agent.agentId)}>Delete</button>
                      </div>
                  </div>
              </div>
          ))}

      </div>
    );
}

export default FieldAgents;