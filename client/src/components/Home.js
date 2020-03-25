import React from 'react';
import { Header, Button, Card, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import axios from 'axios'


class Home extends React.Component {
  state = { users: [], };
  //get all the users 
  componentDidMount() {
    axios.get("/api/users")
      .then(res => {
        this.setState({ users: res.data, });
      })
  }
  renderDepartments = () => {
    const { users, } = this.state;

    if (users.length <= 0)
      return <h2>No users</h2>
    return users.map( user => (
      <Card key={`user-${user.id}`}>
          <Card.Content>
            <Card.Header>{user.username}</Card.Header>
          </Card.Content>
        </Card>
    ))
  }
  // get all the posts
  render() {
    return (
      <>
        <Header as="h3" floated='left' textAlign="center">MySpace</Header>
       
        {/* <Button as={Link} to='/post/form' color='green' >Create Post</Button> */}
        {/* <PostForm /> */}
      </>
    )
  }
}


export default Home;