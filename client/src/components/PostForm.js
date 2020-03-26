import React from "react";
import { Form, Header, Button } from "semantic-ui-react";
import axios from "axios";

class PostForm extends React.Component {
  defaultValues = { 
    name: "",
    body: "",
  };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const post = { ...this.state };
    axios.post(`/api/users/${this.state.current_user}/posts`, post).then(res => {
      this.setState({ ...this.defaultValues });
      this.props.history.push(`/`);
    }).catch( (err) => {
      console.log(err.response)
  })

  };

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  render() {
    const { name, body } = this.state;

    return (
      <div>
        <Header as="h1">New Post</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="body"
              placeholder="post desc"
              value={body}
              onChange={this.handleChange}
              required
            />

          </Form.Group>
          <Button color="blue">Submit</Button>
          {/* <Form.Button color="blue">Submit</Form.Button> */}
        </Form>
      </div>
    );
  }
}

export default PostForm