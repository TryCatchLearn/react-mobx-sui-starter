import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Menu, Icon } from '../../../node_modules/semantic-ui-react';

const SideNav = ({ onHide, visible }) => {
  return (
    <Sidebar
      as={Menu}
      animation="push"
      inverted
      visible
      vertical
      width="thin"
    >
      <Menu.Item as={NavLink} to="/" exact>
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to="/help">
        <Icon name="help circle" />
        Help
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Link
      </Menu.Item>
    </Sidebar>
  );
};

export default SideNav;
