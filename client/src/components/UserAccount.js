
import React, { useState, useEffect, } from "react";
import axios from "axios";
import { List, Header, Segment, Button, } from "semantic-ui-react";
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const UserAccount = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    axios.get("/api/posts")
      .then( res => {
        setPosts(res.data);
      })
  }, [])
  const renderPosts = () => {
    return posts.map( post => (
      <Segment key={post.id}>
        <List.Header as="h3">{post.name}</List.Header>
        <List.Description>
          { post.body }
        </List.Description>
        <Button as={Link} to='/post/form' color='green'>Create</Button>
        <Button as={Link} to='/post/Edit' color='yellow'>Edit</Button>
        <Button as={Link} to='/post/delete' color='red'>Delete</Button>
      </Segment>
    ))
  }
  return (
    <AccoutStyle>
      <br/>  
      <h1>*Username*</h1>
      <br/>  
      <List>
        { renderPosts() }
      </List>

  </AccoutStyle>
  )
}

const AccoutStyle = styled.div`
 position: absolute !important;

 left: 200px !important;
`;


export default UserAccount