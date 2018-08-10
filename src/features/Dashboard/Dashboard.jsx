import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';
import { Button } from 'semantic-ui-react';

@inject('uiStore')
@observer
export default class Dashboard extends Component {
  render() {
      const {uiStore} = this.props;
    return (
      <div>
        <h1>Dashboard</h1>
        <Button content="Alert!" onClick={() => uiStore.createAlert('Testing')}/>
      </div>
    )
  }
}
