import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";

import Navigation from "Components/Navigation";
import Footer from "Components/Footer";

import { routes } from "Constants/routes";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

class App extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <AppContainer>
                <Navigation />
                <Switch>
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

export default withRouter(App);
