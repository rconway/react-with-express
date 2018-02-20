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

class Richard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
        
        this.handleAddUser = this.handleAddUser.bind(this);
    }
    
    setUsers(users) {
        this.setState({
            users: users.slice().sort(function(a, b) {
                return b.age - a.age;
            })
        });
    }
    
    componentDidMount() {
        var self = this;
        fetch("/users").then(function(response) {
            return response.json();
        }).then(function(users) {
            self.setUsers(users)
        });
    }
    
    handleAddUser(user) {
        var self = this;
        var postData = user;
        console.log(postData);
        fetch("/users/add", {
            method: "post",
            headers: {
              "content-type": "application/json"  
            },
            body: JSON.stringify(postData)
        }).then(function(response) {
            return response.json();
        }).then(function(users) {
            self.setUsers(users)
        });
    }

    render() {
        var userList;
        if (this.state.users) {
            userList = this.state.users.map(function(user) {
                return <li key={user.id}>{user.name} : {user.age}</li>;
            });
        }
        return (
            <div>
                ...Richard here...
                <AddUserForm onSubmit={this.handleAddUser} />
                <hr/>
                <ul>
                    {userList}
                </ul>
            </div>
        );
    }
}

export default Richard;
