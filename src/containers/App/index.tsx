import { map, uniqueId } from 'lodash';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import './App.css';
import routes from '../../router';
import store from '../../store';
import Header from '../../components/Header';

type Props = {};

type State = {};

class App extends Component<Props, State> {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Router>
                        <Switch>
                            {map(routes, ({ path, component }) => (
                                <Route
                                    exact
                                    path={path}
                                    component={component}
                                    key={uniqueId(`${path}-`)}
                                />
                            ))}
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
