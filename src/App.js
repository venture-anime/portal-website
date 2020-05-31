import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./container/Home";
import Staff from "./container/Staff";
import About from "./container/About";
import Rewards from "./container/Rewards";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MAIN_PATH = "/";
export const ABOUT_PATH = "about";
export const CAST_PATH = "cast";
export const REWARDS_PATH = "rewards";

const routes = [
    { path: `${MAIN_PATH}${ABOUT_PATH}`, component: About },
    { path: `${MAIN_PATH}${CAST_PATH}`, component: Staff },
    { path: `${MAIN_PATH}${REWARDS_PATH}`, component: Rewards },
    { path: MAIN_PATH, component: Home },
];

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
