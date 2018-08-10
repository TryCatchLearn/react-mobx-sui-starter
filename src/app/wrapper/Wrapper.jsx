import React, { Component } from 'react';
import { Container } from '../../../node_modules/semantic-ui-react';
import { Route } from '../../../node_modules/react-router-dom';
import {ToastContainer} from 'react-toastify';

import routes from '../config/routes';

export default class Wrapper extends Component {
  render() {
    return (
      <Container className="main-wrapper">
        <ToastContainer position="bottom-right"/>
        {routes.map(({ path, exact, component: C }) => (
          <Route key={path} exact={exact} path={path} render={props => <C />} />
        ))}
      </Container>
    );
  }
}
