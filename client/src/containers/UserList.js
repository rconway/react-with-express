import React, { Component } from "react";
import { connect } from "react-redux";

import * as Actions from "../actions/actions";
import AddUserForm from "../components/AddUserForm";

import "./UserList.css";

class UserList extends Component {

  componentDidMount() {
    if (!this.props.users || this.props.users.length === 0) {
      var self = this;
      self.props.fetchUsers();
    }
  }

  render() {
    var userList;
    if (this.props.users) {
      // Sort by age descending
      userList = this.props.users.slice().sort(function(a, b) {
        return b.age - a.age;
      })
      // Output as list items.
      userList = userList.map(function(user) {
        return (
          <tr key={user.id}>
            <td className="user-list-name">{user.name}</td>
            <td className="user-list-age">{user.age}</td>
          </tr>
        );
      });
    }
    return (
      <div>
        <AddUserForm onSubmit={this.props.addUser} />
        <hr/>
        { userList && userList.length>0 ? (
          <div className="user-list">
            <table className="table table-sm table-bordered table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="user-list-name">Name</th>
                  <th scope="col" className="user-list-age">Age</th>
                </tr>
              </thead>
              <tbody>
                {userList}
              </tbody>
            </table>
          </div>
        ) : (
          <div>Loading users...</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function() {
      dispatch(Actions.actionFetchUsers());
    },
    addUser: function(user) {
      dispatch(Actions.actionSubmitAddUser(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
