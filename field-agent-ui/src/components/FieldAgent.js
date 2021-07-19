import { useState } from 'react';
import data from "../data";
import logo from "../images/field-agent-logo.png"

function FieldAgents(){
    const [agents, setAgents] = useState(data);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState('');
    const [editAgentId, setEditAgentId] = useState(-1);
    const [deleteAgent, setDeleteAgent] = useState(-1);
    const [currentView, setCurrentView] = useState('List'); // List, Add, Edit, Delete

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

        setCurrentView('List');
    }

    const editAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const newAgent = {
            agentId: editAgentId,
            firstName,
            middleName,
            lastName,
            dob,
            heightInInches
        };

        const newAgents = [...agents];

        const newAgentIndex = newAgents.findIndex(agent => agent.agentId === editAgentId);

        newAgents[newAgentIndex] = newAgent;

        setAgents(newAgents);

        setFirstName('');
        setMiddleName('');
        setLastName('');
        setDob('');
        setHeightInInches('');

        setCurrentView('List');
    }

    const AgentEditClickHandler = (AgentId) => {
        setEditAgentId(AgentId);

        // Retrieve Agent to edit
        const editAgent = agents.find(agent => agent.agentId === AgentId);

        // Update fields
        setFirstName(editAgent.firstName);
        setMiddleName(editAgent.middleName);
        setLastName(editAgent.lastName);
        setDob(editAgent.dob);
        setHeightInInches(editAgent.heightInInches)

        // Show edit form
        setCurrentView('Edit');
    }

    const AgentDeleteClickHandler = (AgentId) => {
        setAgents(agents.filter(agent => agent.agentId !== AgentId));
        setCurrentView('List');
    }

    const addAgentClickHandler = () => {
        setCurrentView('Add');
    }

    const cancelClickHandler = () => {
        setCurrentView('List');
    }

    const deleteClickHandler = (AgentId) => {
        setDeleteAgent(agents.find(agent => agent.agentId === AgentId));
        setCurrentView('Delete')
    }

    return (
      <div>
          <header>
              <div className="header-left">
                  <h1>Field Agent</h1>
                  <a href="#"><img src={logo} alt="field agent logo"/></a>
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

          <main className="agents">
          {currentView === 'Add' ? (
              <div>
                  <h3 className="center-headline">Add Agent</h3>
                  <form onSubmit={addAgentFormSubmitHandler}>
                      <div className="field">
                          <label htmlFor="firstName">First Name: </label>
                          <input type="text" id="firstName" name="firstName" value={firstName} onChange={firstNameOnChangeHandler} />
                      </div>

                      <div className="field">
                          <label htmlFor="middleName">Middle Name: </label>
                          <input type="text" id="middleName" name="middleName" value={middleName} onChange={middleNameOnChangeHandler} />
                      </div>

                      <div className="field">
                          <label htmlFor="lastName">Last Name: </label>
                          <input type="text" id="lastName" name="lastName" value={lastName} onChange={lastNameOnChangeHandler} />
                      </div>

                      <div className="field">
                          <label htmlFor="dob">Date of Birth: </label>
                          <input type="text" id="dob" name="dob" value={dob} onChange={dobNameOnChangeHandler} />
                      </div>

                      <div className="field">
                          <label htmlFor="heightInInches">Height in Inches: </label>
                          <input type="text" id="heightInInches" name="heightInInches" value={heightInInches} onChange={heightOnChangeHandler} />
                      </div>

                      <div className="field">
                          <button type="submit">Add Agent</button>
                          <button type="button" onClick={cancelClickHandler}>Cancel</button>
                      </div>
                  </form>
              </div>
          ) : null}

          { currentView === 'Edit' ? (
              <div>
                  <h3>Edit Agent</h3>
                  <form onSubmit={editAgentFormSubmitHandler}>
                      <div className="field">
                          <label htmlFor="firstName">First Name: </label>
                          <input type="text" id="firstName" name="firstName" value={firstName} onChange={firstNameOnChangeHandler} />
                      </div>

                      <div className="field">
                          <label htmlFor="middleName">Middle Name: </label>
                          <input type="text" id="middleName" name="middleName" value={middleName} onChange={middleNameOnChangeHandler} />
                      </div>

                      <div className="field">
                          <label htmlFor="lastName">Last Name: </label>
                          <input type="text" id="lastName" name="lastName" value={lastName} onChange={lastNameOnChangeHandler} />
                      </div>

                      <div className="field">
                          <label htmlFor="dob">Date of Birth: </label>
                          <input type="text" id="dob" name="dob" value={dob} onChange={dobNameOnChangeHandler} />
                      </div>

                      <div className="field">
                          <label htmlFor="heightInInches">Height in Inches: </label>
                          <input type="text" id="heightInInches" name="heightInInches" value={heightInInches} onChange={heightOnChangeHandler} />
                      </div>

                      <div className="field">
                          <button type="submit">Update Agent</button>
                          <button type="button" onClick={cancelClickHandler}>Cancel</button>
                      </div>
                  </form>
              </div>
          ) : null}

          {currentView === 'List' ? (
              <div>
                  <h2 className="center-headline">Agents</h2>
                  <button onClick={addAgentClickHandler}>Add Agent</button>
                  {agents.map(agent => (

                      <div className="cards">
                          <div>
                              <h3>{agent.firstName} {agent.middleName} {agent.lastName}</h3>
                              <ul>
                                  <li><span>DOB:</span> {agent.dob}</li>
                                  <li><span>Height in Inches:</span> {agent.heightInInches}</li>
                              </ul>
                              <div>
                                  <button onClick={() => AgentEditClickHandler(agent.agentId)}>Edit</button>
                                  <button onClick={() => deleteClickHandler(agent.agentId)}>Delete</button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          ) : null}

          { currentView === 'Delete' ? (
              <div>
                  <h2 className="center-headline">Delete Agent</h2>
                  <div className="cards">
                      <div>
                          <h3>{deleteAgent.firstName} {deleteAgent.middleName} {deleteAgent.lastName}</h3>
                          <ul>
                              <li><span>DOB:</span> {deleteAgent.dob}</li>
                              <li><span>Height in Inches:</span> {deleteAgent.heightInInches}</li>
                          </ul>
                      </div>
                  </div>
                  <p>Are you sure you want to delete this agent?</p>
                  <button onClick={() => AgentDeleteClickHandler(deleteAgent.agentId)}>Delete</button>
                  <button type="button" onClick={cancelClickHandler}>Cancel</button>
              </div>
          ) : null }
          </main>

          <footer>

              <section>

                  <h2>Legal Notices</h2>

                  <p>Copyright &copy; 2021 Field Agent Inc. All rights reserved | <a href="#">Privacy Policy</a></p>

              </section>

          </footer>
      </div>
    );
};

export default FieldAgents;