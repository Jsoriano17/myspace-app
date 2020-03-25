import React, { Fragment, } from 'react';
import Home from './components/Home';
import UserAccount from './components/UserAccount'
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import PostForm from './components/PostForm';

const App = () => (
<div>
  <Navbar />
  <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/user/Account" component={UserAccount} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
        <Route exact path="/post/form" component={PostForm} />
      </Switch>
    </Container>
  </FetchUser>
</div>
)



export default App;
