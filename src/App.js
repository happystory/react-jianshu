import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './store';
import Header from './components/header';
import Home from './views/home';
import Detail from './views/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
         <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/detail" render={() => <Detail />} />
          </Switch>
         </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
