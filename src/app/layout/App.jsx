import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from '../../../node_modules/react-router-dom';
import { Provider } from 'mobx-react';
import SideNav from '../sidenav/SideNav';
import Wrapper from '../wrapper/Wrapper';
import './App.css';

import * as stores from '../../app/stores';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <Fragment>
            <SideNav />
            <Wrapper />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
