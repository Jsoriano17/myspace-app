import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

export default class PostForm extends React.Component {
  state = { name: '', body: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, body, } = this.state;
    // this.props.auth.handleLogin({ name, body, }, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, body, } = this.state;
  
    return (
      <Segment basic  floated='center'>
        <Header as='h1' textAlign='center'>Create Post</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Title"
            autoFocus
            required         
            name='name'
            value={name}
            placeholder='title'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Description"
            required
            name='body'
            value={body}
            placeholder='Add Description'
            type='text'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

