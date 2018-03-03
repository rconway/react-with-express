import React, { Component } from "react";

class AddUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        age: ""
      }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleNameChange(event) {
    this.setState({
      form: Object.assign({}, this.state.form, {
        name: event.target.value
      })
    });
  }

  handleAgeChange(event) {
    this.setState({
      form: Object.assign({}, this.state.form, {
        age: Number(event.target.value)
      })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.form);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Add user...</p>
        <label>Name:
          <input name="name" type="text"
            value={this.state.form.name}
            onChange={this.handleNameChange}
            placeholder="enter name here"
          />
        </label>
        <label>Age:
          <input name="age" type="number"
            value={this.state.form.age}
            onChange={this.handleAgeChange}
            placeholder="enter age here"
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddUserForm;
