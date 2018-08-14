import React, { Component } from 'react';
import UserList from '../users/UserList.js';
import UserForm from '../users/UserForm.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, firstname: 'Andres', lastname: 'Ramirez', email: 'gandres.ramirez@gmail.com'},
        {id: 2, firstname: 'Felipe', lastname: 'cardona', email: 'felipe@gmail.com'},
        {id: 3, firstname: 'Alex', lastname: 'Cardona', email: 'alex@gmail.com'},
      ]
    }
  }

  handleOnAddUser(event) {
    event.preventDefault();
    let user =  {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
    };
    this.setState({
      users: this.state.users.concat([user])
    })
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
        <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
      </div>
    );
  }
}

export default App;