import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        <p>{this.props.firstname}</p>
        <p>{this.props.lastname}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default User;