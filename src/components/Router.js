import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
    };

    useEffect(() => login(), []);
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
