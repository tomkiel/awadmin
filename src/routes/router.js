import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

import Loader from '../components/Loader';

/// Loading
const loading = (
    <Loader></Loader>
)

/// Pages
const HomePanel = React.lazy(() => import('../pages/Panel/Home'));


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
    }
    />
);


class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Suspense fallback={loading}>
                    <Switch>
                        <Route exact path="/index" component={() => <h1>Hello Listen!</h1>} />
                        <PrivateRoute path="/" name="Home Panel" component={props => <HomePanel {...props} />} />
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        );
    }
};


export default Routes;