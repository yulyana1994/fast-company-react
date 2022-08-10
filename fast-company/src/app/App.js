import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/users" component={Users}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Main}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
}

export default App;
