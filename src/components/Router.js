import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Home from "routes/Home";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
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
