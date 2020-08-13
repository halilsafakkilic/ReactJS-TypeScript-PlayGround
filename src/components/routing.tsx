import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import { Home } from '@pages/home';
import { User } from '@pages/user';

const Routing = (props: any) => {
    return <Switch>
        <Route path="/user">
            <User {...props} />
        </Route>
        <Route path="/">
            <Home {...props} />
        </Route>
    </Switch>;
}

export default Routing;