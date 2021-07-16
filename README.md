# M09-FieldAgentUI

## Tasks

* [x] create github repo
* [x] Update the readme
* [x] Add the instruction team as collaborators
* [x] Review the requirements

### Part1: Project Setup and Agents List
* [x] Create a new react project
    * remove the cruft - refer back to components and jsx exercise
    
* [x] Migrate CSS files from last weeks assessment
    * copy them into public folder
    * Link to them in the index.html file
    
* [x] Add in provided `data.js` file
  
* [ ] Create FieldAgents component - stub
  * Update App component to render FieldAgents
  
* [ ] Update FieldAgents to render list of field agents
    * copy html from previous assessment
    * Replace static data with dynamic data
    


### Part 2: Add and Delete Agent

* [ ] Create a form to add an Agent
    * add form JSX
    * decide between using individual state variables for input elements or a single object
    * Add onchange event handlers - one per input element
    * Add onSubmit event handler
    * Prevent the form from submitting
    * Create the Agent object and update the Agents array - dont modify the original array
    
* [ ] Support deleting Agents
    * Add delete confirmation JSX
    * Add button click handler to perform the delete - don't modify the original array
    
* [ ] Conditionally render sections of the component
    * Add state variable to track the current view
    * add conditional logic to the JSX to display the appropriate view
    
### Part 3: Edit Agent
* [ ] Support editing agents
    * [ ] Store the "edit agent ID" in a new state variable
    * [ ] Retrieve the agent to edit
    * [ ] update form state variables
    * [ ] Add form JSX
    * [ ] add onchange
    * [ ] add onsubmit
    * [ ] prevent the form from submitting
    * [ ] Create Agent Object and update the agents array
    
* [ ] Use the provided tet plan to manually test the application

## High-Level Requirements

## Technical Requirements
        
       