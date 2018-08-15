import React, { Component } from 'react';
import UserList from '../users/UserList.js';
import UserForm from '../users/UserForm.js';
import fire from '../fire';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentWillMount(){
  let usersRef = fire.database().ref('users').orderByKey().limitToLast(100);
    usersRef.on('child_added', snapshot => {
      console.log(snapshot.val());
      let user = {
        id: snapshot.key,
        email: snapshot.val().email,
        firstname: snapshot.val().firstname,
        lastname: snapshot.val().lastname,
      };
      this.setState({ users: [user].concat(this.state.users)});
    })
  }

  handleOnAddUser(event) {
    event.preventDefault();
    let user =  {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
    };
    fire.database().ref('users').push(user);
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