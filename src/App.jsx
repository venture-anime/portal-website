import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Navigation from 'Components/Navigation';
import Footer from 'Components/Footer';
import { redirect_routes, routes } from 'Constants/routes';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

class App extends Component {
    componentDidUpdate(prevProps) {
        const { location } = this.props;

        if (location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <AppContainer>
                <Navigation />
                <Switch>
                    {redirect_routes.map(({ from, to }) => (
                        <Redirect from={from} to={to} />
                    ))}
                    {routes.map(({ path, component, exact }) => (
                        <Route
                            exact={exact}
                            key={path}
                            path={path}
                            component={component}
                        />
                    ))}
                </Switch>
                <Footer />
            </AppContainer>
        );
    }
}

App.propTypes = {
    location: PropTypes.string,
};

export default withRouter(App);
