import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'normalize.css';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound'
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;