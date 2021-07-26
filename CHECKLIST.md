
# Module 10 Assessment Requirements Checklist and Test Plan

## Requirements Checklist

* [ ] Features (each feature complete, works without errors)
    * [ ] Home
    * [ ] Login
    * [ ] Register
    * [ ] Agents
    * [ ] Add Agent
    * [ ] Edit Agent
    * [ ] Delete Agent
    * [ ] Not Found (displays for all unknown routes)
* [ ] Security
    * [ ] Login State (the current logged in user's username displays somewhere on the page along with a "Logout" button)
    * [ ] Logout (app provides a way for the current user to logout)
    * [ ] Protected Routes (Agents, Add Agent, Edit Agent, and Delete Agent [if implemented] require a logged in user)
* [ ] Validation Errors (API validation errors display in the React UI)
* [ ] React Router
    * [ ] Client-Side Routes (all required routes implemented)
    * [ ] `useHistory` Hook (used to programmatically redirect users)
    * [ ] `useParams` Hook (used to access parameters, paths, and other data)
* [ ] React Context (used to share global state and helper functions to components throughout the app)
* [ ] Secured Field Agent Service (provided back-end service used for all user/agent operations)
* [ ] Fetch API (used for all async HTTP requests to the back-end data service)
* [ ] JavaScript (valid, well-organized, clean and consistent formatting)
* [ ] JSX (valid, well-organized, clean and consistent formatting)
* [ ] HTML/CSS (migrated from the previous assessment or used a CSS framework)

## Test Plan

* [ ] Home
    * [ ] Displays when browsing to `/`
    * [ ] Available to all users (anonymous and authenticated)
* [ ] Login
    * [ ] Displays when browsing to `/login`
    * [ ] Includes "Username" and "Password" fields
    * [ ] Login fails for bad username/password combination
    * [ ] Generic "login failed" message displayed in the UI on failed login attempt
    * [ ] Login succeeds for good username/password combination
    * [ ] User is redirected to the "Home" page after a successful login
* [ ] Register
    * [ ] Displays when browsing to `/register`
    * [ ] Includes "Username", "Password", and "Confirmation Password" fields
    * [ ] API validation errors are displayed in the UI when submitting bad data
    * [ ] User account is created when submitting good data
    * [ ] User is automatically logged in and redirect to the "Home" page or is redirect to the "Login" page after successfully registering
* [ ] Security
    * [ ] Username and "Logout" button is displayed on every page after a successful login
    * [ ] Clicking the "Logout" button logs out the current user
    * [ ] User is redirected to the "Login" page when attempting to browse to any of the agent related routes without being logged in
* [ ] Agents
    * [ ] Displays when browsing to `/agents`
    * [ ] Displays a list of the agents with basic information from the backend service
    * [ ] Includes a button/link to browse to the "Add Agent" page
    * [ ] For each agent, includes buttons/links to browse to the "Edit Agent" and "Delete Agent" pages for the associated agent
* [ ] Add Agent
    * [ ] Displays when browsing to `/agents/add`
    * [ ] Displays a form for the user to enter an agent's information
    * [ ] Includes a button to submit the form
    * [ ] Includes a button/link to cancel the add operation and return to the "Agents" page
    * [ ] API validation errors are displayed in the UI when submitting bad data
    * [ ] An agent's information can be entered into the form and when the form is submitted, the agent is added to the backend service
    * [ ] The user is redirect to the "Agents" page after successfully creating an agent
* [ ] Edit Agent
    * [ ] Displays when browsing to `/agents/edit/1` (replace `1` with a valid agent ID)
    * [ ] Displays a form for the user to edit an agent's information
    * [ ] Includes a button to submit the form
    * [ ] Includes a link to cancel the edit operation and return to the "Agents" page
    * [ ] The form pre-populates with the agent's current information
    * [ ] API validation errors are displayed in the UI when submitting bad data
    * [ ] The agent's information can be changed in the form and when the form is submitted, the agent is updated in the backend service
    * [ ] The user is redirect to the "Agents" page after successfully updating an agent
* [ ] Delete Agent
    * [ ] Displays when browsing to `/agents/delete/1` (replace `1` with a valid agent ID)
    * [ ] Displays an agent's basic information
    * [ ] Displays a delete confirmation message
    * [ ] Includes a button to complete the delete operation
    * [ ] Includes a link to cancel the delete operation and return to the "Agents" page
    * [ ] Proceeding with the delete operation removes the agent from the backend service
    * [ ] The user is redirect to the "Agents" page after successfully deleting an agent
* [ ] Not Found
    * [ ] Attempting to browse to an unknown route displays the "Not Found" page