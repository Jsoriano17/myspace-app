import React from 'react';
import { Header, Button, Card, Segment, List, Container, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import axios from 'axios'
import styled from 'styled-components';


class Home extends React.Component {
  state = { posts: [], };
  // get all the users 
  componentDidMount() {
    axios.get("/api/posts")
      .then( res => {
      this.setState({posts: res.data});
      })
  }
  renderPosts = () => {
    const { posts } = this.state
    return posts.map( post => (
      <Segment key={post.id} floated='left'>
        <List.Header as="h3">{post.name}</List.Header>
        <List.Description>
          { post.body }
        </List.Description>
      </Segment>
    ))
  }
  // get all the posts
  render() {
    return (
      <HomeStyle>
        <br/>
        <h1>MySpace Posts</h1>
        <h5>(run db:seed)</h5>
        <br/>
        {this.renderPosts()}
        {/* <Button as={Link} to='/post/form' color='green' >Create Post</Button> */}
      </HomeStyle>
    )
  }
}
const HomeStyle = styled.div`
 position: absolute !important;
 left: 200px !important;
`;

export default Home;