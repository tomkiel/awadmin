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
const Websites = React.lazy(() => import('../pages/Panel/Websites'));


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
                <Switch>
                    <React.Suspense fallback={loading}>
                        <Route exact path="/df" component={() => <h1>Hello Listen!</h1>} />
                        <PrivateRoute exact path="/" name="Home Panel" component={props => <HomePanel {...props} />} />
                        <PrivateRoute exact path="/websites" name="Websites" component={props => <Websites {...props} />} />
                    </React.Suspense>
                </Switch>
            </BrowserRouter>
        );
    }
};


export default Routes;