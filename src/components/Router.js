import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({isLoggedIn, userObj}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Redirect from ="*" to="/" />
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Redirect from ="*" to="/" />
                    </>
                    ) : (
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    )}
            </Switch>
        </Router>
    )
};

export default AppRouter;