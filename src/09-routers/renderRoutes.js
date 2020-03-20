import React from "react";
import {Route, Switch} from 'react-router-dom';
import {routes} from "./routes";

function RouterApp() {
    return (
        <Switch>
            {routes.map((route, i) => (
                <Route
                    key={i}
                    exact={route.exact}
                    strict={route.strict}
                    path={route.path}
                    render={props => (
                        <route.component {...props} route={route}/>
                    )}
                />
            ))}
        </Switch>
    );
}
export default RouterApp;
