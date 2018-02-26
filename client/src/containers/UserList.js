import React, { Component } from "react";
import { connect } from "react-redux";

import { actionSetUsers } from "../actions/actions";
import AddUserForm from "../components/AddUserForm";

class UserList extends Component {
    constructor(props) {
        super(props);

        this.handleAddUser = this.handleAddUser.bind(this);
    }

    componentDidMount() {
        if (!this.props.users || this.props.users.length === 0) {
            var self = this;
            /* global fetch */
            fetch("/users").then(function(response) {
                return response.json();
            }).then(function(users) {
                self.props.setUsers(users);
            });
        }
    }
    
    handleAddUser(user) {
        var self = this;
        var postData = user;
        fetch("/users/add", {
            method: "post",
            headers: {
              "content-type": "application/json"  
            },
            body: JSON.stringify(postData)
        }).then(function(response) {
            return response.json();
        }).then(function(users) {
            self.props.setUsers(users);
        });
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
                <AddUserForm onSubmit={this.handleAddUser} />
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
    setUsers: function(users) {
      dispatch(actionSetUsers(users));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
