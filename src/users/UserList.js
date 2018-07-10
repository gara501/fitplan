import React, { Component } from 'react';
import User from './User.js'

class UserList extends Component {
  render () {
    return (
        <ul>
          {this.props.users.map(u => {
            return (
              <User
                key={u.id}
                firstname={u.firstname}
                lastname={u.lastname}
                email={u.email}
              />
            );
          })}
        </ul>
    );
  }
}

export default UserList;