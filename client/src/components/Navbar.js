import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../myspace.svg'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu>
          <Menu.Item as={MenuFont}
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu>
          <Link to='/login'>
            <Menu.Item as={MenuFont}
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item as={MenuFont}
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary vertical as={MenuStyle} floated='left'>
          <Menu.Item>
            <img src={Logo} alt="Logo" />
          </Menu.Item>
          <Link to='/'>
            <Menu.Item as={MenuFont}
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/user/account'>
            <Menu.Item as={MenuFont}
              name='Account'
              id='Account'
              active={this.props.location.pathname === '/user/account'}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}
const MenuStyle = styled.div`
  background: black !important;
  font-family: 'Roboto', sans-serif !important;
  height: 1000px !important;
  width: 150px !important;
`;
const MenuFont = styled.div`
 color: white !important;
`;

export default withRouter(ConnectedNavbar);