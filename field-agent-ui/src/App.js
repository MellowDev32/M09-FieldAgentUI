import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import React from 'react';
import AuthContext from './AuthContext';
import Home from "./components/Home";
import AddAgent from "./components/AddAgent";
import EditAgent from "./components/EditAgent";
import DeleteAgent from "./components/DeleteAgent";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Agents from "./components/Agents";
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";

const TOKEN_KEY = 'user-api-token';

function App() {

    const [user, setUser] = useState(null);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);

        if (token) {
            login(token);
        }

        setInitialized(true);
    }, []);

    const login = (token) => {
        localStorage.setItem(TOKEN_KEY, token);

        // decode the token string into a JavaScript object
        const tokenObj = jwt_decode(token);
        console.log(tokenObj);

        const { id, sub: username, roles: rolesString } = jwt_decode(token);

        // Split the roles string into an array of roles.
        const roles = rolesString.split(',');

        // create the "user" object
        const user = {
            id,
            username,
            roles,
            token,
            hasRole(role) {
                return this.roles.includes(role);
            }
        };

        // update the user state
        setUser(user);

        return user;
    };

    const logout = () => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
    };

    // collect all of the auth related stuff into a single object
    const auth = {
        user: user ? {...user} : null,
        login,
        logout
    };

    // prevent routing until we've prevented restoring the user's login state...
    if (!initialized) {
        return null;
    }

    return (
        <AuthContext.Provider value={auth}>

            <Router>

                <Header />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/agent">
                            {user ? (
                                <Agents />
                            ) : (
                                <Redirect to="/login" />
                            )}
                        </Route>
                        <Route path="/agent/add">
                            {user ? (
                                <AddAgent />
                            ) : (
                                <Redirect to="/login" />
                            )}
                        </Route>
                        <Route path="/agent/edit/:id">
                            {user ? (
                                <EditAgent />
                            ) : (
                                <Redirect to="/login" />
                            )}
                        </Route>
                        <Route path="/agent/delete/:id">
                            {user ? (
                                <DeleteAgent />
                            ) : (
                                <Redirect to="/login" />
                            )}
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                <Footer />
            </Router>

        </AuthContext.Provider>
    );
}

export default App;
