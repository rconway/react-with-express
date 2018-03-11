import React, { Component } from "react";
import { connect } from "react-redux";

import { actionFetchUsers, actionSubmitAddUser } from "../actions/actions";
import AddUserForm from "../components/AddUserForm";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

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
        return <li key={user.id}>{user.name} : {user.age}</li>;
      });
    }
    return (
      <div>
        ...User List here...
        <AddUserForm onSubmit={this.props.addUser} />
        <hr/>
        { userList && userList.length>0 ? (
          <ul>
            {userList}
          </ul>
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
      dispatch(actionFetchUsers());
    },
    addUser: function(user) {
      dispatch(actionSubmitAddUser(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
