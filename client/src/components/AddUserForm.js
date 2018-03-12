import React, { Component } from "react";

import "./AddUserForm.css";

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
      <div className="user-form">
        <div className="user-form-title">Add a NEW user...</div>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group form-inline">
            <label>Name
              <input name="name" type="text"
                value={this.state.form.name}
                onChange={this.handleNameChange}
                placeholder="enter name here"
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group form-inline">
            <label>Age
              <input name="age" type="number"
                value={this.state.form.age}
                onChange={this.handleAgeChange}
                placeholder="enter age here"
                className="form-control"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}

export default AddUserForm;
